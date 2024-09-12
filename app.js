import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import { errMiddle } from "./middleware/errMiddle.js";
import cors from "cors";
import userRouter from "./Routes/userRoute.js";
import { env } from "./util/env.js";

const app = express()

// console.log(env)

// deffault middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());


// Routes
app.use("/user",userRouter)

// Universal route
app.use("*",(req,res)=>{
    res.status(404).json({
        status:404,
        message:"Page not found"
    })
})

// catching errors
app.use(errMiddle);

export default app;