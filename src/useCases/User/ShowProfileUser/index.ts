import UsersRepository from "../../../repositories/UsersRepository/implementations/UsersRepository";
import ShowProfileUserController from "./ShowProfileController";
import ShowProfileUserUseCase from "./ShowProfileUserUseCase";

const postgresUsersRepository = new UsersRepository();

const showProfileUserUseCase = new ShowProfileUserUseCase(
  postgresUsersRepository
);

const showProfileUserController = new ShowProfileUserController(
  showProfileUserUseCase
);

export { showProfileUserUseCase, showProfileUserController };
