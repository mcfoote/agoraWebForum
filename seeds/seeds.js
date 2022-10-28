const sequelize = require('../config/connection.js');
const {User, Board, Thread, Post} = require('../models');

const userData = require('./userData.json');

const seedDatabase = async() => {

    await sequelize.sync({ force: true });

    for(const board of boardData) {
        await Board.create({
            ...board,
            
        });
    }

    process.exit(0);
};

seedDatabase();