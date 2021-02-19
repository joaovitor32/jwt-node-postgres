<div>
  <h3>Docker - Node:</h3>
  
    docker build -t <your-username>/dockernode . 
    docker run -p 3000:3000 -d <your-username>/dockernode
    To list images: docker ps

  <h3>Docker - Postres:</h3>
  
    docker run --name postgres -e POSTGRES_PASSWORD=secret -d -p 5432:5432 postgres


  <h3>Docker - compose:</h3>
  <p>To run node and postgres is necessary just the following command
  </p>
    
    docker-compose build
    docker-compose --env-file ./.env up  
 
 </div>

### User routes

- **`POST / users`**: The route must receive the fields `nome`  and `senha` in the body of the request in order to register a new user.

- **`POST /login`**: The route must receive  the fields `nome`  and `senha` in order to authenticate a user.

- **`GET /showProfile`**: This route shows content related to an authenticated user.

<h5>Example of .env file:</h5>

```user = postgres
user=dockerpostgres
host=0.0.0.0 
database=jwtnodepostgres
password=dockerpostgres
portDB=5432
portNode=3000
hostPostgres=jwt-node-postgres_db_1
secret=JWTNODEPOSTGRES

```
<h5>If there is any problem:</h5>

```user = postgres

docker-compose stop
sudo rm -rf ./data/postgres/

```
