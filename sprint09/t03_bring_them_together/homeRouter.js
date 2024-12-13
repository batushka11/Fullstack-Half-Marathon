const express = require('express');
const control = require('./controllers.js');

const homeRouter = express.Router();

homeRouter.get('/', control.home);

module.exports = homeRouter;
