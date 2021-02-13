import IUsersRepository  from '../IUsersRepository';
import { User } from '../../../entities/User';

export class FakeUsersRepository implements IUsersRepository {
    private users: User[] = [];
  
    async save(user: User): Promise<User> {
      this.users.push(user);
      return user;
    }
  
  
}
  