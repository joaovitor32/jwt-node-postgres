import {Request,Response} from 'express';
import { ShowProfileUserUseCase } from './ShowProfileUserUseCase';

export class ShowProfileUserController{

    constructor(
        private  showProfileUserUseCase:ShowProfileUserUseCase
    ){}

    async handle(request:Request,response:Response){

        try{

            const user_id = request.id;

            let user = await this.showProfileUserUseCase.execute(user_id);

            return response.status(200).send(user);

        }catch(err){

            return response.status(400).json({
                message:err.message||"Unexpected error"
            })

        }

    }

}