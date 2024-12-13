const path = require('path');
const express = require('express');
const app = express();
const normalRouter = require('./normal-router');
const quantumRouter = require('./quantum-router');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', normalRouter);
app.use('/', quantumRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Use http://localhost:${PORT}/normal to see normal time`);
    console.log(`Use http://localhost:${PORT}/quantum to see quantum time`);
});

