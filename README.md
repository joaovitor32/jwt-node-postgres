sudo service postgresql restart
docker-compose build --no-cache
docker-compose --env-file ./.env up 

If there is any problem:

docker-compose stop
 sudo rm -rf ./data/postgres/
