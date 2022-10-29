const User = require('./User');
const Board = require('./Board');
const Thread = require('./Thread');
const Post = require('./Post');

Board.hasMany(Thread, {
    //foreignKey: 'threads_id'
});
/*
Thread.belongsTo(Board, {
    foreignKey: 'board_id'
});

Thread.hasMany(Post, {
    onDelete: 'CASCADE'
});

Post.belongsTo(Thread, {
    foreignKey: 'thread_id'
});
*/
module.exports = { User, Board, Thread, Post};