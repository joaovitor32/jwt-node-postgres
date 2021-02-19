import AppError from '../../../errors/AppError';

import { FakeUsersRepository } from '../../../repositories/UsersRepository/fakeimplementations/FakeUsersRepository';
import FakeHashProvider  from '../../../providers/HashProvider/fakeimplementation/FakeHashProvider';

import { CreateUserUseCase } from './CreateUserUseCase';

let fakeUsersRepository:FakeUsersRepository;
let fakeHashProvider:FakeHashProvider;

let createUserUseCase:CreateUserUseCase;

describe('Creating User tests',()=>{

    beforeEach(()=>{

        fakeUsersRepository = new  FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
        createUserUseCase = new  CreateUserUseCase(fakeUsersRepository,fakeHashProvider);

    })

    it('Should be able to create a new user',async ()=>{

        const user = await createUserUseCase.execute({
            nome:'João Vitor Muniz Lopes',
            senha:'teste1'
        })

        expect(user).toHaveProperty('id');

    })

    it('Should not be able to create new User',async ()=>{

        await createUserUseCase.execute({
            nome:"Jhon Doe",
            senha:"123457"
        })

        expect(createUserUseCase.execute({
            nome:"Jhon Doe",
            senha:"1234527123213213"
        })).rejects.toBeInstanceOf(AppError);
 

    })

})