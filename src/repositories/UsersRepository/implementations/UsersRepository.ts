import pg from 'pg'
import {User} from '../../../entities/User';
import IUsersRepository from '../IUsersRepository';

import ICreateUserDTO from '../../../useCases/CreateUser/CreateUserDTO';

export class UsersRepository implements IUsersRepository{

    config={
        user:process.env.user||"postgres ",
        host: process.env.hostPostgres||"jwt-node-postgres_db_1",
        database:process.env.database||"simplecrud",
        password:process.env.password||"postgres",
        port:process.env.portDB?parseInt(process.env.portDB):5432
    }

    async save({id,nome,senha}:ICreateUserDTO):Promise<User>{
       
        let response;

        let db = new pg.Client(this.config);

        await db.connect();

        const query = "INSERT INTO usuario (id,nome,senha) VALUES ($1,$2,$3) RETURNING *;";

        response = await db.query(query,[id,nome,senha]);
      
        await db.end();
        
        return response.rows[0];

    }

}