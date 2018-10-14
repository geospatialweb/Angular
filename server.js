'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const fs = require('fs');
const morgan = require('morgan');
const { Pool } = require('pg');
const resolve = require('path').resolve;

const config = require('./config/config');
const geojson = require('./modules/geojson');

app
    .use(express.static(resolve(config.source.path)))

    .use(morgan(config.morgan.format, {
        stream: fs.createWriteStream(resolve(config.morgan.logfile), {
            flags: config.morgan.flags
        })
    }))

    .set('env', process.env.NODE_ENV)

    .set('host', process.env.HOST)

    .set('port', process.env.PORT)

    .set('timeout', process.env.TIMEOUT);

io.
    on('connection', socket =>
    {
        socket.on(config.socket.event, params =>
        {
            const sql = `SELECT ${params.fields} FROM ${params.table}`;

            const pool = new Pool({
                /* local instance process.env.DATABASE_URL_LOCAL */
                connectionString: process.env.DATABASE_URL
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
    });


server
    .listen(process.env.PORT, process.env.HOST, err =>
    {
        err ?
            console.error('Server Failed:\n', err) :

            console.log(`Active on http://${process.env.LOCALHOST}:${process.env.PORT} at ` +
                `${new Date().toDateString()} ${new Date().toTimeString()}`);
    });
