const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());

app.use((req, res, next) => {
    const now = Date.now();
    const oneMinute = 60000;
    let pageLoads = req.cookies.pageLoads ? JSON.parse(req.cookies.pageLoads) : [];

    pageLoads = pageLoads.filter(timestamp => now - timestamp < oneMinute);

    pageLoads.push(now);

    res.cookie('pageLoads', JSON.stringify(pageLoads), { maxAge: oneMinute });

    res.locals.pageLoadCount = pageLoads.length;

    next();
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Page Load Counter</title>
        </head>
        <body>
            <h1>Page Loads in the Last Minute: ${res.locals.pageLoadCount}</h1>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});