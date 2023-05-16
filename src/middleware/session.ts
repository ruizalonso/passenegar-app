import { NextFunction, Request, Response } from "express";
import { JwtPayload, JsonWebTokenError } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
import { httpErrors } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization;
    if (jwtByUser) {
      const jwt = jwtByUser.split(" ").pop();
      const isUser = verifyToken(`${jwt}`) as { id: string };
      if (!isUser) {
        httpErrors(res, 401, "Invalid token provided");
      } else {
        // console.log(isUser);

        req.user = isUser;
        next();
      }
    } else {
      httpErrors(res, 401, "Token was not found");
    }
  } catch (e: any) {
    httpErrors(res, 401, e.message);
  }
};

export { checkJwt };
