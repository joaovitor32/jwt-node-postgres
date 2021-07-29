import { v4 as uuidv4 } from "uuid";

export default class User {
  public readonly id: string;

  public nome: string;

  public senha: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}
