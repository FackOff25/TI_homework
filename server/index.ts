'use strict';
import body from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import * as path from 'path';
import * as fs from 'fs';
import DB from "./db/db.js";
import { Emploee, EqRequest } from './db/types.js';

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
app.get(/queries\/emploee\/get\/all/, async (req: any, res: any) => {
    const emploees = await database.getEmploees();

    res.StatusCode = 200;
    res.StatusMessage = 'OK';
    res.json({emploees});
})
app.get('/queries/emploee/get/:userId([0-9]+)', async (req: any, res: any) => {
    const emploee = await database.getEmploee(req.params.userId);

    res.StatusCode = 200;
    res.StatusMessage = 'OK';
    res.json({emploee});
})
app.post(/queries\/emploee\/delete/, async (req: any, res: any) => {
    database.deleteEmploee(req.body.code).then(() => {
        res.StatusCode = 200;
        res.StatusMessage = 'OK';
        res.end();
    }).catch(() => {
        res.StatusCode = 404;
        res.StatusMessage = 'NOT/FOUND';
        res.end();
    });
})
app.post(/queries\/emploee\/add/, async (req: any, res: any) => {
    const emploee: Emploee = {
        name: req.body.name,
        surname: req.body.surname,
        fathername: req.body.fathername
    }
    database.addEmploee(emploee).then(() => {
        res.StatusCode = 200;
        res.StatusMessage = 'OK';
        res.end();
    }).catch(() => {
        res.StatusCode = 400;
        res.StatusMessage = 'BAD/REQUEST';
        res.end();
    });
})
app.post(/queries\/emploee\/update/, async (req: any, res: any) => {
    const emploee: Emploee = {
        code: req.body.code,
        name: req.body.name,
        surname: req.body.surname,
        fathername: req.body.fathername
    }
    database.updateEmploee(emploee).then(() => {
        res.StatusCode = 200;
        res.StatusMessage = 'OK';
        res.end();
    }).catch(() => {
        res.StatusCode = 400;
        res.StatusMessage = 'BAD/REQUEST';
        res.end();
    });
})
app.get(/queries\/equipment\/get\/all/, async (req: any, res: any) => {
    const equipment = await database.getEquipment();

    res.StatusCode = 200;
    res.StatusMessage = 'OK';
    res.json({equipment});
})
app.get('/queries/request/get/list/:userId([0-9]+)', async (req: any, res: any) => {
    database.getRequests(req.params.userId).then((requests) => {
        console.log(requests);
        res.StatusCode = 200;
        res.StatusMessage = 'OK';
        res.json({requests});
        res.end();
    }).catch(() => {
        res.StatusCode = 400;
        res.StatusMessage = 'BAD/REQUEST';
        res.end();
    });
})
app.post(/queries\/request\/add/, async (req: any, res: any) => {
    const request: EqRequest = {
        assigner: req.body.assigner,
        equipment: req.body.equipment,
        date_from: req.body.date_from,
        date_to: req.body.date_to
    }
    database.addRequest(request).then(() => {
        res.StatusCode = 200;
        res.StatusMessage = 'OK';
        res.end();
    }).catch(() => {
        res.StatusCode = 400;
        res.StatusMessage = 'BAD/REQUEST';
        res.end();
    });
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
