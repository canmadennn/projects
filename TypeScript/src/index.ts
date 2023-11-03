import express, {Express, NextFunction, Request, Response} from 'express';
import {sfcInfo} from "./srv/impl/sfcInfo/sfcInfo";
import {ApiResponse} from "./srv/dto/ApiResponse";
import dotenv from 'dotenv';
import {db} from './db';

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

app.get('/createTables',(req:Request, res:Response)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    db.sfcAssy.create();
    res.json({
        message:"success"
    });
});

app.get('/add',(req:Request,res:Response,next:NextFunction)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );


    res.json({
        message:"success"
    });
});
app.get('/getData',(req:Request,res:Response,next:NextFunction)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    sfcInfo.getUser().then((v: ApiResponse)=>{
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

app.listen(port, () => {
    console.log("s");
});
