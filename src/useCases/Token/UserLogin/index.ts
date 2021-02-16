import BcryptHashProvider from '../../../providers/HashProvider/implementation/BcryptHashImplementation';
import { UsersRepository } from '../../../repositories/UsersRepository/implementations/UsersRepository';

 import { LoginUserController } from './LoginUserController';
 import { LoginUserUseCase } from './LoginUserUseCase';

 const bcryptHashProvider = new BcryptHashProvider();
 const postgresUsersRepository = new UsersRepository();

 const loginUserUseCase = new LoginUserUseCase(
     postgresUsersRepository,
     bcryptHashProvider
 )

 const loginUserController = new LoginUserController(loginUserUseCase);

 export {
    loginUserUseCase,
    loginUserController
 }