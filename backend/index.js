import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors'
import passport from "passport";
import dotenv from 'dotenv';
import router from './Routes/AuthRouter.js'
import { UserRouter } from './Routes/UserRoute.js';
import './Config/passport.js'
const PORT = process.env.PORT || 8000;
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/auth',router);
app.use('/users',UserRouter);





app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT);
})