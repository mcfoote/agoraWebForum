const User = require('./User');
const Board = require('./Board');
const Thread = require('./Thread');
const Post = require('./Post');

Board.hasMany(Thread, {

});

Thread.belongsTo(Board, {
    foreignKey: 'board_id'
});

Thread.hasMany(Post, {
    onDelete: 'CASCADE'
});

Post.belongsTo(Thread, {
    foreignKey: 'thread_id'
});
