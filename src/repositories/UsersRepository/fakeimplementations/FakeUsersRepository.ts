import IUsersRepository  from '../IUsersRepository';
import { User } from '../../../entities/User';

export class FakeUsersRepository implements IUsersRepository {
    private users: User[] = [];
  
    async save(user: User): Promise<User> {
      this.users.push(user);
      return user;
    }
  
    async findByName(name: string): Promise<User|undefined> {
      
      const user = await this.users.find(user => user.nome === name);

      return user;
    }

    async read(id: string): Promise<User|undefined> {
      const user = await this.users.find(user => user.id === id);

      return user;
    }
  
}
  