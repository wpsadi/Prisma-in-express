import {prisma} from "../prisma/prisma.js";
import { cookieToken } from "../util/cookieToken.js";
import { AppError } from "../util/errClass.js";


export const signup = async (req,res,next)=>{
    try{
        const {name, email, password} = req.body;

        if (!name || !email || !password){
            return next(new AppError("Please provide name, email and password", 400));
        }

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        });

        user.password = undefined; // remove password from response

        cookieToken(user,res);
        // res.status(201).json({
        //     status:201,
        //     message:"User created successfully",
        //     data:user
        // });
    }catch(err){
        next(new AppError(err.message, 500));
    }
}