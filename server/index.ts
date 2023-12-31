'use strict';
const body = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(body.json());

const port = process.env.PORT || 8081;
const HTTPSport = 443;


app.get(/static\/css\/index\.css/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '..', 'front', 'public', 'static', 'css', 'index.css'));
})
app.get(/dist\/main\.bandle\.js/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '..', 'front', 'public', 'dist', 'main.bandle.js'));
})
app.get(/modules\/handlebars\.js/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '..', 'front', 'public', 'modules', 'handlebars.js'));
})
app.get(/icons\.svg/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '..', 'front', 'public', 'icons.svg'));
})
app.get(/.*/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '..', 'front', 'public', 'index.html'));
})


try{
    https
        .createServer(
            {
                key: fs.readFileSync(path.resolve(__dirname, 'cert', 'key.pem')),
                cert: fs.readFileSync(path.resolve(__dirname, 'cert', 'cert.pem')),
//                key: fs.readFileSync('/etc/letsencrypt/live/gototeam.ru/privkey.pem'),
//                cert: fs.readFileSync('/etc/letsencrypt/live/gototeam.ru/cert.pem'),
//                ca:  fs.readFileSync('/etc/letsencrypt/live/gototeam.ru/chain.pem'),
            },
            app
        )
        .listen(HTTPSport, function () {
            console.log(`Server listening port ${HTTPSport}`);
        });
}catch (e) {
    app.listen(port, function () {
        console.log(`Server listening port ${port}`);
    });
}
