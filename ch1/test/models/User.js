const db = require('../../src/models/index');
const { Op } = require('sequelize');

const user = db.user;

(async () => {
    const allSelectOptions = await user.findAll({
        attributes : ['userNumber', 'firstName', 'secondName'],
        where : {
            [Op.or]: [
                {userNumber : 2, firstName : 'choi'},
                {userNumber : 1, firstName : 'na'}
            ]

        }
    })

    console.log(allSelectOptions);
})();




