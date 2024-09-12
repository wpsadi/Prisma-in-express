import { createToken , verifyToken} from "../helpers/jwtUserToken.js";


export const cookieToken =  (user,res)=>{
    const token = createToken(user.id);
    const {expireTime} = verifyToken(token);
    const options = {
        httpOnly:true,
        expires: new Date(expireTime),
        secure:false,
        sameSite:"strict"
    }

    user.password = undefined; // remove password from response
    res.status(200).cookie("token", token, options).json({
        status:200,
        message:"User logged in successfully",
        data:user
    })
}