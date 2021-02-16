import {Router} from 'express';

import { createUserController } from './useCases/User/CreateUser';
import { loginUserController } from './useCases/Token/UserLogin'

import CheckAuthorizationMiddleware from './middlewares/CheckAuthorizationMiddleware';

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/login',(request,response)=>{
    return loginUserController.handle(request,response);
})

router.use(CheckAuthorizationMiddleware);

export {router};