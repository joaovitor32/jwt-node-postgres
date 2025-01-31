import User from "../../../entities/User";
import AppError from "../../../errors/AppError";
import IHashProvider from "../../../providers/HashProvider/implementation/BcryptHashImplementation";
import IUsersRepository from "../../../repositories/UsersRepository/IUsersRepository";
import ICreateUserDTO from "./CreateUserDTO";

export default class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  private hashProvider: IHashProvider;

  constructor(usersRepository: IUsersRepository, hashProvider: IHashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async execute({ nome, senha }: ICreateUserDTO): Promise<User> {
    const usersAlreadyExists = await this.usersRepository.findByName(nome);

    if (usersAlreadyExists) {
      throw new AppError("User already exists");
    }

    const hashedPassword = await this.hashProvider.hash(senha);

    const user = new User({ nome, senha: hashedPassword });

    await this.usersRepository.save(user);

    return user;
  }
}
