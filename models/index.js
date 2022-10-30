const User = require('./User');
const Board = require('./Board');
const Thread = require('./Thread');
const Post = require('./Post');

Board.hasMany(Thread, {
    onDelete: 'CASCADE',
    foreignKey: 'board_id'
});

Thread.belongsTo(Board, {
    //foreignKey: 'board_id'
});

Thread.hasMany(Post, {
    onDelete: 'CASCADE',
    foreignKey: 'thread_id'
});

Post.belongsTo(Thread, {
    //foreignKey: 'thread_id'
});

module.exports = { User, Board, Thread, Post};