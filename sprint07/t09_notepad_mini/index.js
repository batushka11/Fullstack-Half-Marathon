const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let notes = [];

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:date', (req, res) => {
    const note = notes.find(n => n.date === req.params.date);
    if (note) {
        res.json(note);
    } else {
        res.status(404).send('Note not found');
    }
});

app.post('/api/notes', (req, res) => {
    const note = req.body;
    notes.push(note);
    res.json(note);
});

app.delete('/api/notes/:date', (req, res) => {
    notes = notes.filter(note => note.date !== req.params.date);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

