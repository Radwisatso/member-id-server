# Guide for starting the server

1. install all dependencies with `npm i` on the terminal
2. run `sequelize db:create`, but you need to readjust the environment on config.js (`dotenv` library), create new file `.env` on the root project and input all required environments (e.g: `db_dev_username=yourUsername`)
3. run `sequelize db:migrate` and `sequelize db:seed:all` to migrate the database model and the hardcoded seeders
4. run `npm run dev` to start the server 
