const processModule = require('node:process');
const pathModule = require('path');
const urlModule = require('node:url');
const httpModule = require('node:http');
const ipModule = require('ip');
const osModule = require('os');

const port = 3000;

const server = httpModule.createServer((request, response) => {
    const requestUrl = urlModule.parse(request.url).pathname;
    if (requestUrl === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});

        console.log(`A name of file of the executed script: ${pathModule.basename(__filename)}`);

        console.log(`\nArguments passed to the script: ${processModule.argv}`);

        console.log(`\nIP address of the server: ${ipModule.address()}\n`);

        console.log(`A name of host that invokes the current script: ${osModule.hostname}\n`);
        console.log(`A name and a version of the information protocol: HTTP ${request.httpVersion}\n`);
        console.log(`A query method: ${request.method}\n`);
        console.log(`User-Agent information: ${request.headers[`user-agent`]}\n`);
        console.log(`IP address of the client: ${request.socket.remoteAddress}\n`);
        
        const parsedUrl = urlModule.parse(request.url, true);
        const parameters = parsedUrl.query;
        console.log(`A list of parameters passed by URL: `);
        console.log(JSON.stringify(parameters));

        response.end("Check console to see an info");
    }
})
.listen(port, () => {
    console.log(`Server running at http://localhost:${port}?player=false&page=1`);
});