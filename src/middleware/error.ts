import { NextFunction, Response, Request } from "express";
import { UnauthorizedError } from 'express-jwt'
import { httpErrors } from "../utils/error.handle";

const handleHttpError = (err: UnauthorizedError, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
        const jwtErrorCodes = [
            'invalid_token',
            'credentials_bad_scheme',
            'credentials_bad_format',
            'credentials_required',
            'revoked_token'
        ];

        if (err.code && jwtErrorCodes.includes(err.code)) {
            return httpErrors(res, err.status, err.inner.message)
        }
        return httpErrors(res, 401, 'Unauthorized error')

    } else if (err.name === 'ForbiddenError') {
        return httpErrors(res, 403, 'Forbidden error')

    } else {
        return httpErrors(res, 400, 'Unknow error')
    }
};

export { handleHttpError }