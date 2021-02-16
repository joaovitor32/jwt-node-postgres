import {Router} from 'express';

import { createUserController } from './useCases/User/CreateUser';

import CheckAuthorizationMiddleware from './middlewares/CheckAuthorizationMiddleware';

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/login',(request,response)=>{
    return
})

router.use(CheckAuthorizationMiddleware);

export {router};