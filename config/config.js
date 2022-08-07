require('dotenv').config(); // this is important!

module.exports = {
  "development": {
    "username": process.env.db_username, // your database username
    "password": process.env.db_password, // your database password 
    "database": process.env.db_dev_database, // your database name
    "port": process.env.db_dev_port, // your database port
    "host": process.env.db_dev_host, // your database host, e.g: localhost
    "dialect": process.env.db_dialect // your database dialect, e.g: postgres
},
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
