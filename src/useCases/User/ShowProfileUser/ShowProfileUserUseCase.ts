import User from "../../../entities/User";
import AppError from "../../../errors/AppError";
import IUsersRepository from "../../../repositories/UsersRepository/IUsersRepository";

export default class ShowProfileUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string): Promise<User | undefined> {
    const response = await this.usersRepository.read(id);

    if (!response) {
      throw new AppError("User not found");
    }

    const user = new User(response, response.id);

    return user;
  }
}
