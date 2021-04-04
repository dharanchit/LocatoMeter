const express = require('express');
const details = require('./api/details/routes');
const location = require('./api/locations/routes');

module.exports = (app) => {
    app.use("/users",details())
    app.use("/locations",location())
}