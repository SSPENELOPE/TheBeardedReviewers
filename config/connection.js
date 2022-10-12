<<<<<<< HEAD
const Sequelize = require("sequelize");
require("dotenv").config();
=======
const Sequelize = require('sequelize');
require('dotenv').config();
>>>>>>> main

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
<<<<<<< HEAD
    host: "localhost",
    dialect: "mysql",
=======
    host: 'localhost',
    dialect: 'mysql',
>>>>>>> main
    port: 3306,
  }
);

<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> main
