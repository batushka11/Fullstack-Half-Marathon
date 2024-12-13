const express = require('express');
const fs = require('fs');
const request = require('request');

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function get(i = '') {
    let data = fs.readFileSync('index.html', 'utf-8');
    data = data.replace('<div id="text"></div>', i);
    return data;
}

function fetch(url, clb) {
    const full = url.startsWith('http') ? url : 'http://' + url;
    request(full, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            clb(body.substring(body.indexOf('<body'), body.indexOf('</body') + 7).replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        } else {
            clb('');
        }
    });
}

app.get('/', (req, res) => {
    if (req.query.url) {
        fetch(req.query.url, (body) => {
            res.send(get('<hr>url: ' + req.query.url + '<br><hr><pre>' + body + '</pre>'));
        });
    } else {
        res.send(get('<div id="typeurl">Type an URL...</div>'));
    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});