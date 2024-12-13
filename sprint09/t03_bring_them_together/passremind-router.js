const express = require('express');
const control = require('./controllers.js');

const passRemindRouter = express.Router();

passRemindRouter.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/pass_remind.html');
});

passRemindRouter.post('/', control.pass_remind);

module.exports = passRemindRouter;