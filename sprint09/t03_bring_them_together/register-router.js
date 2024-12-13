const express = require('express');
const control = require('./controllers.js');

const registerRouter = express.Router();

registerRouter.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/register.html');
});

registerRouter.post('/', control.registration);

registerRouter.get('/',(req,res)=>{
    res.redirect('/home');
})

module.exports = registerRouter;