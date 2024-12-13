const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let filePath = '';
        if (req.url === '/') {
            filePath = path.join(__dirname, 'index.html');
        } else if (req.url === '/script.js') {
            filePath = path.join(__dirname, 'script.js');
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
            if (ext === '.js') contentType = 'application/javascript';

            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const { answer } = JSON.parse(body);
                const correctAnswer = 'pushed';
                const message = (answer === correctAnswer) ?
                    'Correct! Thanos pushed Gamora off the mountain.' :
                    'Incorrect. Shame on you! Go and watch Avengers!';
                
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message }));
            } catch (e) {
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message: 'Bad Request' }));
            }
        });
    } else {
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method Not Allowed');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});