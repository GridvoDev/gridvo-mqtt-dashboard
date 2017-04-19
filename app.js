'use strict';
const express = require('express');
const {logger} = require('./lib/util');

let app;
app = express();
app.use("/", express.static(__dirname + "/extjs/build/production/MqttDashboard"));
app.listen(9192, (err) => {
    if (err) {
        logger.error(err.message);
    }
    else {
        logger.info("express server is starting");
    }
});