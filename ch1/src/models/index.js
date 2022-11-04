const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const db = {};
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
    // logging: (...msg) => console.log(msg),
    logging: console.log
});

// console.log(sequelize);

sequelize.authenticate()
    .then((result) => {
        console.log('sequelize db connection success');
    })
    .catch(err => {
        console.error('unable connect db : ', err);
    })


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
