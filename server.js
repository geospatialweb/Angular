'use strict';

require('dotenv').config();

const config = require('./config/config');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const resolve = require('path').resolve;

express()
    .use(morgan(config.morgan.format, {
        stream: fs.createWriteStream(resolve(config.morgan.logfile), {
            flags: config.morgan.flags
        })
    }))

    .use(express.static(resolve(config.source.root)))

    .use(config.routes.layers, require(resolve(config.routes.routes, config.routes.layers.slice(1))))

    .set('env', process.env.NODE_ENV)

    .set('host', process.env.HOST)

    .set('port', process.env.PORT)

    .set('timeout', process.env.TIMEOUT)

    .listen(process.env.PORT, process.env.HOST, err =>
    {
        err ?
            console.error('Server Failed:\n', err) :

            console.log(`Active on http://${process.env.LOCALHOST}:${process.env.PORT} at ` +
                `${new Date().toDateString()} ${new Date().toTimeString()}`);
    });
