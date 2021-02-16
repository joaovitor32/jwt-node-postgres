import {User} from '../../../entities/User';
import AppError from '../../../errors/AppError';
import ILoginUserDTO from './LoginUserDTO';
import {IHashProvider} from '../../../providers/HashProvider/IHashProvider';
import IUsersRepository from '../../../repositories/UsersRepository/IUsersRepository';
import {sign} from 'jsonwebtoken';
import authConfig from '../../../config/auth';

require('dotenv').config()

interface IResponse{
    user:User,
    token:string
}

export class LoginUserUseCase{

    private usersRepository:IUsersRepository;
    private hashProvider:IHashProvider;

    constructor(usersRepository:IUsersRepository,hashProvider:IHashProvider){

        this.usersRepository=usersRepository;
        this.hashProvider=hashProvider;

    }

    async execute({nome,senha}:ILoginUserDTO):Promise<IResponse>{


        let existingUser:User;

        try{
            existingUser = await this.usersRepository.findByName(nome);
        }catch{
            throw new AppError('Login failed, try again',500);
        }

        if(!existingUser){
            throw new AppError('User not found by given name',401);
        }

        let isValidPassword = false;
        try{
            isValidPassword = await this.hashProvider.compare(senha,existingUser.senha);
        }catch{
            throw new AppError('User validation could not be completed',500);

        }

        if(isValidPassword){
            throw new AppError('Given password is not valid',500);
        }

        const {secret,expires} = authConfig.jwt;

        let token;
        try{
            token = sign({},secret,{
                subject:existingUser.id,
                expiresIn:expires
            })
        }catch{
            throw new AppError('User login failed, try later',500)
        }

        return {
            user:existingUser,
            token
        }

    }

}