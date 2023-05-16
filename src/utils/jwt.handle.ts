import { sign, verify } from "jsonwebtoken";
import { expressjwt } from 'express-jwt'
import { Types } from "mongoose";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generateToken = (id: Types.ObjectId) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '5h',
  })
  return jwt
}

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

const jwt = () => {
  return expressjwt({ algorithms: ['HS256'], secret: JWT_SECRET })
    .unless({
      path: [
        '/api/v1/auth/register',
        '/api/v1/auth/login',
        // '/api/v1/user',
      ]
    });
}

export { generateToken, verifyToken, jwt };
