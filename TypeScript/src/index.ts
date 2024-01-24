import express, {Express, NextFunction, Request, Response,Application} from 'express';
import cors, { CorsOptions } from 'cors';

import {sfcInfo} from "./srv/impl/sfcInfo/sfcInfo";
import {ApiResponse} from "./srv/dto/ApiResponse";
import dotenv from 'dotenv';
import {db} from './db';
import {IgenericTables, Itest} from "./db/models";
import {genericTs} from "./srv/impl/genericTs/genericTs";



dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));
app.get('/getBomBySfc', (req: Request, res: Response, next :NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    let plant  = req.query.plant as string;
    let sfc    = req.query.sfc as string;
    sfcInfo.getBOMInfoBySfc(plant,sfc).then((v: ApiResponse)=>{
        if(v.status !== 200 && v.status !== 201) {
            if (typeof v.status === "number") {
                res.status(v.status);
            }
            else res.status(500);
            res.json(v);
        }
        else
            res.json(v);
    }).catch(err => next(err));
});

app.get('/createTable',(req:Request, res:Response)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
   let x= sfcInfo.getUser();
    res.json({
        message:x
    });
});

app.post('/ornekEndpoint', (req, res) => {
    const requestData = req.body;
    const response = {
        status: 200,
        message: 'Success',
        data: requestData
    };
    res.json(response);
});


app.post('/createGenericTable', (req, res,next:NextFunction) => {
    const requestData = req.body;
    genericTs.dynamicTableCreate(requestData.clm,requestData.type,requestData.tableName).then((v: ApiResponse)=>{
        if(v.status !== 200 && v.status !== 201) {
            if (typeof v.status === "number") {
                res.status(v.status);
            }
            else res.status(500);
            res.json(v);
        }
        else
            res.json(v);
    }).catch(err => next(err));

});

app.get('/dropTable',(req:Request, res:Response, next: NextFunction)=>{
    let tableName  = req.query.tableName as string;
    genericTs.dropTable(tableName).then((result: ApiResponse) => {
        if (result) {
            console.log(result);
            res.json(result);
        } else {
            console.error('Beklenen tip veya özellik bulunamadı.');
        }
    })
        .catch((error) => {
            console.error('Hata oluştu:', error);
            res.json(error);
        });


});

app.get('/allTableSelect',(req:Request, res:Response, next: NextFunction)=>{
    genericTs.allTableSelect().then((result: ApiResponse) => {
        if (result) {
            console.log(result);
            res.json(result);
        } else {
            console.error('Beklenen tip veya özellik bulunamadı.');
        }
    })
        .catch((error) => {
            console.error('Hata oluştu:', error);
            res.json(error);
        });


});

app.get('/getData',(req:Request, res:Response, next: NextFunction)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    sfcInfo.getUser();
});

app.listen(port, () => {
    console.log("s");
});
