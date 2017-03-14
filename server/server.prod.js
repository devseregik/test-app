// Dependensies
import http from 'http';
import path from 'path';
import finalhandler from 'finalhandler';
import serveStatic from 'serve-static';

// Up server
const serve = serveStatic(path.resolve(__dirname, '../public'));

const server = http.createServer((req, res) => {
    const done = finalhandler(req, res);

    serve(req, res, done);
});

const port = process.env.PORT || 3000;

server.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Listening on port ${port}...`);
    }
});
