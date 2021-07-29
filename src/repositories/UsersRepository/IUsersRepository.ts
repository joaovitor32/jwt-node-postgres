import { User } from "../../entities/User";

export default interface IUsersRepository {
  save(user: User): Promise<User>;
  findByName(nome: string): Promise<User | undefined>;
  read(id: string): Promise<User | undefined>;
}
