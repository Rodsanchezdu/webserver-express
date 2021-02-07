const http = require('http');

//para escuchar peticiones http primero toca crear el servidor

http.createServer((req, res) => { //req es request y res es respuestas
        res.writeHead(200, { 'Content-Type': 'applicaton/json' });
        let salida = {
            nombre: 'fernando',
            edad: 32,
            url: req.url
        };
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('escuchando el puerto 8080');