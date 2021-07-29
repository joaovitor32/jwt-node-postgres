import { compare, hash } from "bcrypt";

import { IHashProvider } from "../IHashProvider";

class BcryptHashProvider implements IHashProvider {
  public async compare(password: string, hashParam: string): Promise<boolean> {
    return compare(password, hashParam);
  }

  public async hash(password: string): Promise<string> {
    return hash(password, 8);
  }
}

export default BcryptHashProvider;
