import { IHashProvider } from "../IHashProvider";

class FakeHashProvider implements IHashProvider {
  public async compare(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }

  public async hash(payload: string): Promise<string> {
    return payload;
  }
}

export default FakeHashProvider;
