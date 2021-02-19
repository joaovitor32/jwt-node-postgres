import {Router} from 'express';

import { createUserController } from './useCases/User/CreateUser';
import { showProfileUserController } from './useCases/User/ShowProfileUser';
import { loginUserController } from './useCases/Token/UserLogin';

import CheckAuthorizationMiddleware from './middlewares/CheckAuthorizationMiddleware';

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/login',(request,response)=>{
    return loginUserController.handle(request,response);
})

router.use(CheckAuthorizationMiddleware);

router.get('/showprofile',(request,response)=>{
    return showProfileUserController.handle(request,response)
});


export {router};