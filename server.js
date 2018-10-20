'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const fs = require('fs');
const morgan = require('morgan');
const resolve = require('path').resolve;

const config = require('./config/config');
const layers = require('./modules/layers');

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
        return layers(socket);
    });

server
    .listen(process.env.PORT, process.env.HOST, err =>
    {
        err ?
            console.error('Server Failed:\n', err) :

            console.log(`Active on http://${process.env.LOCALHOST}:${process.env.PORT} at ` +
                `${new Date().toDateString()} ${new Date().toTimeString()}`);
    });
