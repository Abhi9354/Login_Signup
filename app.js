import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";
import { userRouter } from "./modules/user/routes/user-routes.js";
import {dbConnectionLoad} from "./shared/sharedDB/connection.js"
dotenv.config();

import path, {dirname} from 'path'
import { fileURLToPath } from 'url';
 const __filename= fileURLToPath(import.meta.url)
 const __dirname=dirname(__filename)
console.log('dirname',__dirname);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',userRouter)//middleware it just a function
app.use(express.static(path.join(__dirname,'client/dist')))

//render client page
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'client/dist/index.html'))
})



const promise=dbConnectionLoad()

promise.then((result)=>{
    console.log('db connection build');
    const server=app.listen(process.env.PORT||1234, (err) => {
        if(err){
            chalk.red(err);
        }else{
            console.log(chalk.green("server is running on port ",server.address().port));
        }
    })
}).catch((err)=>{
    console.log(err);
})


//mongosh "mongodb+srv://cluster9354.nl5ubjl.mongodb.net/" --apiVersion 1 --username AdminUser