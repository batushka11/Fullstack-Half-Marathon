const express = require('express');
const cookieSession = require('express-session');
const loginUser = require('./login-router');
const registerRouter = require('./register-router');
const passRemindRouter = require('./passremind-router');
const homeRouter = require('./homeRouter');
const control = require('./controllers.js');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));

app.use(cookieSession({
    secret: 'ucode_web',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    if (!req.session.user && req.path === '/home') {
        res.status(401).sendFile(__dirname + '/views/401page.html');
        return;
    }

    next();
});

app.use('/login', loginUser);
app.use('/registration', registerRouter);
app.use('/password_remind', passRemindRouter);
app.use('/home', homeRouter);

app.get('/', (req,res)=>{
    res.redirect('/login');
})

app.get('/destroy-session', control.destroy_session);

app.use((req, res) => { 
    res.status(404).sendFile(__dirname + '/views/404page.html');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
