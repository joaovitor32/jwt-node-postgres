import User from "../../../entities/User";
import AppError from "../../../errors/AppError";
import FakeUsersRepository from "../../../repositories/UsersRepository/fakeimplementations/FakeUsersRepository";
import ShowProfileUserUseCase from "./ShowProfileUserUseCase";

let fakeUsersRepository: FakeUsersRepository;

let showProfileUserUseCase: ShowProfileUserUseCase;

describe("Reading User", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfileUserUseCase = new ShowProfileUserUseCase(fakeUsersRepository);
  });

  it("Should be able to read a new User", async () => {
    const userCreated = new User({
      nome: "Jhon Doe",
      senha: "123457",
    });

    const user = await fakeUsersRepository.save(userCreated);

    const userRead = await showProfileUserUseCase.execute(user.id);

    expect(userRead).toEqual({
      id: user.id,
      nome: "Jhon Doe",
      senha: "123457",
    });
  });

  it("Should not be able to read a new User", async () => {
    expect(
      showProfileUserUseCase.execute("non-valid-string")
    ).rejects.toBeInstanceOf(AppError);
  });
});
