/* eslint-disable @typescript-eslint/no-var-requires */
import pg from "pg";

import User from "../../../entities/User";
import ICreateUserDTO from "../../../useCases/User/CreateUser/CreateUserDTO";
import IUsersRepository from "../IUsersRepository";

require("dotenv").config();

export default class UsersRepository implements IUsersRepository {
  config = {
    user: process.env.user ? process.env.user : "postgres",
    host: process.env.hostPostgres
      ? process.env.hostPostgres
      : "jwt-node-postgres_db_1",
    database: process.env.database ? process.env.database : "jwtnodepostgres",
    password: process.env.password ? process.env.password : "postgres",
    port: process.env.portDB ? parseInt(process.env.portDB, 10) : 5432,
  };

  async save({ id, nome, senha }: ICreateUserDTO): Promise<User> {
    const db = new pg.Client(this.config);

    await db.connect();

    const query =
      "INSERT INTO usuario (id,nome,senha) VALUES ($1,$2,$3) RETURNING *;";

    const response = await db.query(query, [id, nome, senha]);

    await db.end();

    return response.rows[0];
  }

  async findByName(nome: string): Promise<User> {
    const db = new pg.Client(this.config);

    await db.connect();

    const query = "SELECT * FROM usuario WHERE nome=$1";

    const response = await db.query(query, [nome]);

    await db.end();

    return response.rows[0];
  }

  async read(id: string): Promise<User> {
    const db = new pg.Client(this.config);

    await db.connect();

    const query = "SELECT * FROM usuario WHERE id=$1";

    const response = await db.query(query, [id]);

    await db.end();

    return response.rows[0];
  }
}
