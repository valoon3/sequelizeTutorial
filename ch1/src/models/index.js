const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const db = {};
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
    // logging: (...msg) => console.log(msg),
    logging: console.log
});


sequelize.authenticate()
    .then((result) => {
        console.log('sequelize db connection success');
        // const user = sequelize.models.User;
        // user.findAll().then((data) => {
        //     console.log(data);
        // })
    })
    .catch(err => {
        console.error('unable connect db : ', err);
    })


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델 설정
db.user = require('./User')(sequelize, Sequelize);


module.exports = db;
