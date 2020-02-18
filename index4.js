const http = require('http');

const colors = require('colors');

const handledServer = function (req, res)
{
    // Ver códigos de estado HTTP
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Hola mundo desde nodejs</h1>');
    res.end();
}
const server = http.createServer(handledServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.bgYellow.black);
});
/* paquetes de nodejs: npm
https://www.npmjs.com
P.e.: npm install colors
*/

