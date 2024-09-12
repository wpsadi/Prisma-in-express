import { config } from "dotenv";
config();


export const env = {
    port: Number(process.env.PORT) || 3000,
    baseURL: String(process.env.BASE_URL) || "http://localhost:3000",
    mongo:{
        username: String(process.env.MONGO_USERNAME),
        password: String(process.env.MONGO_PASSWORD),
        uri: String(process.env.MONGO_URI),
    },
    jwt:{
        secret: String(process.env.JWT_SECRET),
        expireIn: String(process.env.JWT_EXPIRE_IN),
        expireInSec: Number(process.env.JWT_EXPIRE_IN_SEC),
    }
} 