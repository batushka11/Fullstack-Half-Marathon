const express = require('express');
const control = require('./controllers.js');

const loginUser = express.Router();

loginUser.use((req, res, next) => {
    if (req.session.user) {
        return res.redirect('/home');
    }

    next();
});

loginUser.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/login.html');
});

loginUser.post('/', control.login);

module.exports = loginUser;