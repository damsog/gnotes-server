FROM node:16

WORKDIR /app

COPY . .

RUN cp .env.BASE .env

RUN sed -i 's/search_string/replace_string/g' .env
RUN sed -i 's/PORT=\[port\]/PORT=5000/g' .env
RUN sed -i 's/IP=\[ip\]/IP=192.168.1.1/g' .env
RUN sed -i 's/LOGGER_LEVEL=\[DEBUG\/INFO\]/LOGGER_LEVEL=debug/g' .env
RUN sed -i 's/NODE_ENV=\[development\/production\]/NODE_ENV=production/g' .env
RUN sed -i 's/DATABASE_HOST=\[localhost\]/DATABASE_HOST=mongodb/g' .env
RUN sed -i 's/DATABASE_NAME=\[dbname\]/DATABASE_NAME=gnotesdb/g' .env
RUN sed -i 's/TOKEN_KEY=\[secretkey\]/TOKEN_KEY=myserverkey/g' .env

RUN npm install

EXPOSE 5000

CMD ["node","index.js"]