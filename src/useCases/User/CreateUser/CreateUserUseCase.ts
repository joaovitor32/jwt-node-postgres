import {User} from '../../../entities/User';
import AppError from '../../../errors/AppError';
import ICreateUserDTO from "./CreateUserDTO";
import IHashProvider from '../../../providers/HashProvider/implementation/BcryptHashImplementation';
import IUsersRepository from '../../../repositories/UsersRepository/IUsersRepository';

export class CreateUserUseCase{

    private usersRepository:IUsersRepository;
    private hashProvider:IHashProvider;

    constructor(usersRepository:IUsersRepository,hashProvider:IHashProvider){
        
        this.usersRepository = usersRepository;
        this.hashProvider = hashProvider;

    }

    async execute({nome,senha}:ICreateUserDTO){

        const hashedPassword = await this.hashProvider.hash(senha);

        const user = new User({nome,senha:hashedPassword});
    
        await this.usersRepository.save(user);

        return user;

    }

}