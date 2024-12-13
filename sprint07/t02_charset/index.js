const express = require('express');
const app = express();
const { render, convertCharset} = require('./function');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let memory = '';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    memory = req.body;
    if (memory.inputString && memory.charsets) {
        res.send(render(convertCharset(memory)));
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});