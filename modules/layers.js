'use strict';

const config = require('../config/config');
const geojson = require('../modules/geojson');
const { Pool } = require('pg');

module.exports = socket => {
	socket.on(config.socket.event, params =>
    {
        const sql = `SELECT ${params.fields} FROM ${params.table}`;

        const pool = new Pool({
            /* Docker instance process.env.DATABASE_URL */
            connectionString: process.env.DATABASE_URL_LOCAL
        })
            .on('error', err =>
            {
                console.error('Connection Failed:\n', err);
                return process.exit(-1);
            });

        pool.query(sql, (err, rows) =>
        {
            if (err)
                console.error('Query Failed:\n', err);

            else
            {
                if (rows.rowCount > 0)
                    socket.emit(params.table, geojson(rows.rows));

                else
                    console.error('No rows found:\n', sql);
            }

            return pool.end();
        });

        return true;
    });

    return true;
}
