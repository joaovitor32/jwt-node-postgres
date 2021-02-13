import BcryptHashProvider from '../../providers/HashProvider/implementation/BcryptHashImplementation'
import { UsersRepository } from '../../repositories/UsersRepository/implementations/UsersRepository';

import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const bcryptHashProvider = new BcryptHashProvider();
const postgresUsersRepository = new UsersRepository();

//Injeção de depêndencias
const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    bcryptHashProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export {
    createUserUseCase,
    createUserController
}