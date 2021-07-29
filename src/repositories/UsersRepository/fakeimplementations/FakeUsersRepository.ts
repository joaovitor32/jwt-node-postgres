import User from "../../../entities/User";
import IUsersRepository from "../IUsersRepository";

export default class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findByName(name: string): Promise<User | undefined> {
    const user = await this.users.find((userElem) => userElem.nome === name);

    return user;
  }

  async read(id: string): Promise<User | undefined> {
    const user = await this.users.find((userElem) => userElem.id === id);

    return user;
  }
}
