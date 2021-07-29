import User from "../../../entities/User";
import AppError from "../../../errors/AppError";
import FakeHashProvider from "../../../providers/HashProvider/fakeimplementation/FakeHashProvider";
import FakeUsersRepository from "../../../repositories/UsersRepository/fakeimplementations/FakeUsersRepository";
// import CreateUserUseCase from "../../User/CreateUser/CreateUserUseCase";
import LoginUserUseCase from "./LoginUserUseCase";

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;

let loginUserUseCase: LoginUserUseCase;
// let createUserUseCase: CreateUserUseCase;

describe("Authentication", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    /* createUserUseCase = new CreateUserUseCase(
      fakeUsersRepository,
      fakeHashProvider
    ); */

    loginUserUseCase = new LoginUserUseCase(
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  it("Should be able to login", async () => {
    const createdUser = new User({
      nome: "Joao",
      senha: "123",
    });

    const user = await fakeUsersRepository.save(createdUser);

    const response = await loginUserUseCase.execute(createdUser);

    expect(response).toHaveProperty("token");
    expect(response.user).toEqual(user);
  });

  it("should be able to authenticate with non existing user", async () => {
    await expect(
      loginUserUseCase.execute({
        nome: "john doe",
        senha: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
