import AppError from '../../../errors/AppError';

import { FakeUsersRepository } from '../../../repositories/UsersRepository/fakeimplementations/FakeUsersRepository';
import FakeHashProvider from '../../../providers/HashProvider/fakeimplementation/FakeHashProvider';

import { LoginUserUseCase } from './LoginUserUseCase';
import { CreateUserUseCase } from '../../User/CreateUser/CreateUserUseCase';
import { User } from '../../../entities/User';

let fakeHashProvider:FakeHashProvider;
let fakeUsersRepository:FakeUsersRepository;

let loginUserUseCase:LoginUserUseCase;
let createUserUseCase:CreateUserUseCase;

describe('Authentication',()=>{

    beforeEach(()=>{
        
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();

        createUserUseCase =  new CreateUserUseCase(fakeUsersRepository,fakeHashProvider);
        loginUserUseCase = new LoginUserUseCase(fakeUsersRepository,fakeHashProvider);

    })

    it('Should be able to login',async ()=>{

        let createdUser  = new User({
            nome:"Joao",
            senha:'123'
        })

        const user = await fakeUsersRepository.save(createdUser);

        const response = await loginUserUseCase.execute(createdUser)

        expect(response).toHaveProperty('token');
        expect(response.user).toEqual(user);

    })

    it('should be able to authenticate with non existing user', async () => {
        await expect(
          loginUserUseCase.execute({
            nome: 'john doe',
            senha: '123456',
          }),
        ).rejects.toBeInstanceOf(AppError);
      });

})
