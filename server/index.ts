'use strict';
import body from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import * as path from 'path';
import * as fs from 'fs';
import DB from "./db/db.js";

const app = express();
const __dirname = path.resolve();
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(body.json());

const port = process.env.PORT || 8081;

const database = new DB({
    host: '127.0.0.1',
    port: 5432,
    name: 'ti_hw_db',
    login: 'ti_hw',
    password: 'ti_hw',
});

app.get(/static\/css\/index\.css/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'front', 'public', 'static', 'css', 'index.css'));
})
app.get(/dist\/main\.bandle\.js/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'front', 'public', 'dist', 'main.bandle.js'));
})
app.get(/modules\/handlebars\.js/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'front', 'public', 'modules', 'handlebars.js'));
})
app.get(/icons\.svg/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'front', 'public', 'icons.svg'));
})
app.get(/queries\/emploee\/get\/list/, async (req: any, res: any) => {
    const emploees = await database.getEmploees();

    res.StatusCode = 200;
    res.StatusMessage = 'OK';
    res.json({emploees});
})
app.get(/.*/, (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'front', 'public', 'index.html'));
})



app.listen(port, async function () {
    try{
        await database.connect();
    }catch (error){
        console.log('Terminate');
        process.exit(1);
    }

    console.log(`Server listening port ${port}`);
});
