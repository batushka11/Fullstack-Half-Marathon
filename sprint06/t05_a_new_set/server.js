const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let filePath = '';
        if (req.url === '/') {
            filePath = path.join(__dirname, 'index.html');
        } else if (req.url === '/script.js') {
            filePath = path.join(__dirname, 'script.js');
        } else if (req.url === '/style.css') {
            filePath = path.join(__dirname, 'style.css');
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
            return;
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }

            const ext = path.extname(filePath);
            let contentType = 'text/plain';
            if (ext === '.html') contentType = 'text/html';
            if (ext === '.css') contentType = 'text/css';
            if (ext === '.js') contentType = 'application/javascript';

            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/submit') {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
                return;
            }

            const output = `
            POST
            Array
            (
                [name] => ${fields['Name']}
                [email] => ${fields['E-mail']}
                [age] => ${fields['Age']}
                [description] => ${fields['About']}
                [photo] => ${files['Photo'][0].originalFilename}
            )
            `;
            console.log(output);

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(output);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});