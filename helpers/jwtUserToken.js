import jwt from "jsonwebtoken";
import { env } from "../util/env.js";

export const createToken = (userId) => {
  const currentTime = Date.now();
  return jwt.sign(
    {
      userId,
      startTime: currentTime,
      expireTime: currentTime + (env.jwt.expireInSec)*1000,
    },
    env.jwt.secret,
    { expiresIn: env.jwt.expireIn }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, env.jwt.secret);
};
