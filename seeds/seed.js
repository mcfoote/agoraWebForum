const sequelize = require('../config/connection.js');
const { User, Board, Thread, Post } = require('../models');

const boardData = require('./boardData.json');
const threadData = require('./threadData.json');
const postData = require('./postData.json');
const userData = require('./userData.json');

const seedDatabase = async() => {

    await sequelize.sync({ force: true });

    await Board.bulkCreate(boardData);

    await Thread.bulkCreate(threadData);
    
    await Post.bulkCreate(postData);

    await User.bulkCreate(userData);

    process.exit(0);
};

seedDatabase();