# gnotes-server

Gnotes is an application to easily save notes, markdown info, links, and more.

This is the Backend Application Server for the platform. to make use of the application use the [gnotes-cli](https://github.com/damsog/gnotes-cli) application or the frontend web applciation.

## Deployment

First you need to copy the .env.BASE file as .env and fill the paraemeters.

```sh
PORT=[port]
IP=[ip]
LOGGER_LEVEL=[DEBUG/INFO]
NODE_ENV=[development/production]

DATABASE_HOST=[localhost]
DATABASE_NAME=[dbname]

TOKEN_KEY=[secretkey]
```
###### PORT and IP are for you to choose. 

###### LOGGER_LEVEL and NODE_ENV to print debugging information

###### TOKEN_KEY is a secret to encrypt sensible information like passwords

###### DATABASE_NAME=the name of your database

###### DATABASE_HOST is the host access to the database. you can either use your mongo service specifying this field (mongoip:port or localhost:port). however, you can also just use docker-compose which deploys a mongo container, in that case just put
```sh
DATABASE_HOST=mongodb
```

### Docker Container

To deploy the container alone you will need to specify an external mongo DB and pass the environment variable as explained in the previous section.

to build the image, navigate to the project folder and type

```sh
docker build -t gnotes:1.0 .
```
Once it finished building, run it with

```sh
docker run -it gnotes <localport>:5000
```

Or detached in the backgroud


```sh
docker run -d gnotes <localport>:5000
```
### Docker Compose (Recomended)

the easiest way to deploy the application is using the defined docker-compose file. remember to set up the .env file and set the database host as mongodb so the app can access the mogno container

```sh
docker compose up
```

or detached in the backgroud

```sh
docker compose up -d
```
This will run the server on port 5000 and mongo on port 27017. if you wish to change these ports edit the docker-compose.yml
```sh

version: '3.8'

services:
  mongodb:
    ...
    ports:
      - <mongo-port>:27017
    ...
  
  app:
    ...
    ports: 
      - <app-port>:5000
    ...
```

