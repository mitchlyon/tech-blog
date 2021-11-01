const { User } = require('../models');

const userData = [{
    username: 'nick',
    password: 'nick1'

},
{
    username: 'bobby',
    password: 'bobby1'
},
{
    username: 'billy',
    password: 'billy1'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;