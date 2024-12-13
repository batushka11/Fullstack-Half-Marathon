const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');

const port = 3000;
const app = express();
let currentSession;

app.use(express.static(path.resolve()));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/form', (req, res) => {
    currentSession = req.session;
    if(currentSession.name) {
        res.redirect('/user');
        return;
    }
    res.sendFile('index.html');
});

app.post("/check", (req, res) => {
    currentSession = req.session;
    if(!bcrypt.compareSync(req.body.password, currentSession.hash)){
        res.send(`<h1>Password</h1>
            <h2 style="color:red">Access denied!</h2>
            <form action="/check" method="POST" >
            <p>Password saved at session.</p>
            <p>Hash is ${currentSession.hash}</p>
            <p>Try to guess:<input type="text" name="password" placeholder="Password to session"><button type="submit">Check password</button></p>
            </form>
            <button onclick="location.href='/logout'">Clear</button>`);
    } 
    else{
        res.send(`<h1>Password</h1>
        <h2 style="color:green">Hacked!</h2>
        <form action="/form" method="POST" >
        <p>Password not saved at session.</p>
        <p>Password for saving to session<input type="password" name="password" placeholder="Password to session"></p>
        <p>Salt for saving to session<input type="number" name="number" placeholder="Salt to session"></p>
        <button type="submit">Save</button>
        </form>`);
    }
});

app.post("/form", (req, res) => {
    currentSession = req.session;
    const { password, salt } = req.body;
    currentSession.hash = bcrypt.hashSync(password, bcrypt.genSaltSync(Number(salt)));
    res.send(`<h1>Password</h1>
    <form action="/check" method="POST" >
    <p>Password saved at session.</p>
    <p>Hash is ${currentSession.hash}</p>
    <p>Try to guess:<input type="text" name="password" placeholder="Password to session"><button type="submit">Check password</button></p>
    </form>
    <button onclick="location.href='/logout'">Clear</button>
    `);
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/form');
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
