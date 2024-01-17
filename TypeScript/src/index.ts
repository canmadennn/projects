import express, {Express, NextFunction, Request, Response} from 'express';
import {sfcInfo} from "./srv/impl/sfcInfo/sfcInfo";
import {ApiResponse} from "./srv/dto/ApiResponse";
import dotenv from 'dotenv';
import {db} from './db';
import {Itest} from "./db/models";
import {genericTs} from "./srv/impl/genericTs/genericTs";


dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
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

app.get('/createGenericTable',(req:Request,res:Response,next:NextFunction)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
     //db.genericSql.createGenericTable("test1","test22","test4","ra");

    genericTs.dinamikTable().then((v: ApiResponse)=>{
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



app.get('/getData',(req:Request, res:Response, next: NextFunction)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    sfcInfo.getUser();


/*
    db.test.selectTest().then((v)=>{
        let x =v;
        res.json(v);
    }).catch(err=>{
        console.log(err);
        next(err);
    });
*/
});

app.listen(port, () => {
    console.log("s");
});
