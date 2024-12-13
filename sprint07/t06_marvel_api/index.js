const express = require('express');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve()));

app.get('/', async (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('index.html not found');
    }
});

const public = '38cf70b615047fa4264e8416be5d8cd5';
const private = '6127ff0294401622234651242a9cb12601338f58';

app.get('/show', async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    let now = Date.now();
    let hash = crypto.createHash('md5').update(now + private + public).digest('hex');
    let response = await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${public}&hash=${hash}&ts=` + now);
    if (response.ok) {
        let data = await response.json();
        res.json(data);
    } else {
        res.status(response.status).json({ error: response.statusText });
    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});