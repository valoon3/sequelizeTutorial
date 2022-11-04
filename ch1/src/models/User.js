const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const User = sequelize.define('User', {
    // Model attributes are defined here
    userNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

// User.sync({
//     // alter: true // 이미 테이블 상태를 확인하고 필요한 설정을 변경한다.
//     // force : true // 이미 존재하는 경우 삭제 후 생성
// })


// (async () => {
//     const na = User.build({ userNumber: 1});
//
//     await console.log('asdfasdfads', na.firstName);
// })();
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true


