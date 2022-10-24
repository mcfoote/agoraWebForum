const sequelize = require('../config/connection.js');
const {User, Board, Thread, Post} = require('../models');

const userData = require('./userData.json');

const seedDatabase = async() => {

    await sequelize.sync({ force: true });


    process.exit(0);
};

seedDatabase();