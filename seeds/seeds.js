const sequelize = require('../config/connection.js');
//const { User, Board, Thread, Post } = require('../models');
const Board = require('../models/Board')

const boardData = require('./boardData.json');

const seedDatabase = async() => {

    await sequelize.sync({ force: true });

    await Board.bulkCreate(boardData);

    process.exit(0);
};

seedDatabase();