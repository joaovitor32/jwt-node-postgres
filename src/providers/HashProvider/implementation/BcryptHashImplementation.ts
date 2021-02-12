import { IHashProvider } from '../IHashProvider';
import {compare,hash} from 'bcrypt';

class BcryptHashProvider implements IHashProvider{
   
    public async compare(password: string, hash: string): Promise<boolean> {
        return compare(password,hash);
    }
    public async hash(password:string):Promise<string>{
        return hash(password,8)
    }

    
}

export default BcryptHashProvider;