import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import { verify } from 'jsonwebtoken';
import { nextTick } from 'process';

interface ITokenPayload {
    iat:number;
    exp:number;
    sub:string;
}

const CheckAuthorizationMiddleware=(request:Request,response:Response,next:NextFunction):void=>{

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError('Inexistent JWT token',401);
    }

    const token= authHeader.split(' ')[1];

    try{

        const decoded = verify(token,authConfig.jwt.secret);

        const {sub} = decoded as ITokenPayload;

        request.id = sub;

        return next();

    }catch{

        throw new AppError('JWT token is not valid',401)

    }


}

export default CheckAuthorizationMiddleware;