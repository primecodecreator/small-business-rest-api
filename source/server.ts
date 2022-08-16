import http from 'http';
import { Express } from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import express = require('express');
import apiRoute_HealthCheck from './Routes/server-healthcheck-route';
import apiRoute_ProductListing from './Routes/server-product-listing-route';
const NAMESPACE = 'server';
const router = express();

/* Logging the Request*/
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD-[${req.method}] ,URL-[${req.url}],IPADDRESS-[${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD-[${req.method}] ,URL-[${req.url}],IPADDRESS-[${req.socket.remoteAddress}]`);
    });
    next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes */
router.use('/smallbusiness', apiRoute_HealthCheck);
router.use('/smallbusiness', apiRoute_ProductListing);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

/**server initialization */
const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server Stated-, ${config.server.hostname}:${config.server.port}`));
