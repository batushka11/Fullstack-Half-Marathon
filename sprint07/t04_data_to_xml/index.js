const express = require('express');
const session = require('express-session');
const path = require('path');
const { ListAvengerQuotes } = require('./ListAvengerQuotes');
const { data } = require('./array');


const port = 3000;
const app = express();

app.use("/", express.static(path.resolve()));
app.set('views', path.resolve());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    })
);
app.get("/", (req, res) => {
    res.sendFile("/index.html");
});

app.get('/XML', (req, res) => {
    const list = new ListAvengerQuotes(data);
    res.json({
        before: list.toXML('avenger_quote.xml'),
        after: list.fromXML('avenger_quote.xml')
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
