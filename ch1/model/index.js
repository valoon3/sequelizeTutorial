const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('jdbc:mysql://localhost:3306/sequelize_tutorial');

const sequelize = new Sequelize('mysql', 'root', '1234', {
    host: 'localhost',
    dialect: "mysql"
});

// let db = {};
// db.sequelize = sequelize;
// db.User =