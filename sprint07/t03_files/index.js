const express = require('express');
const path = require('path');
const {FileList} = require('./FileList');
const {File} = require('./File');

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve()));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/', (req, res) => {
    const { filename, content } = req.body;
    const file = new File(filename);
    file.write(content);
    res.redirect('/');
});

app.get('/list', (req, res) => {
    let list = new FileList();
    res.json({html: list.getListOnHTML()});
});

app.get('/delete', (req, res) => {
    const { file } = req.query;
    console.log(file);
    const selected = new File(file);
    selected.delete();
    res.redirect('/');
});

app.get('/show', (req, res) => {
    const { file } = req.query;
    console.log(file);
    const selected = new File(file);
    const content = selected.read();
    res.json({ content });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
