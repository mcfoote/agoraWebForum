const User = require('./User');
const Board = require('./Board');
const Thread = require('./Thread');
const Post = require('./Post');

Board.hasMany(Thread, {

});

Thread.belongsTo(Board, {

});

Thread.hasMany(Post, {

});

Post.belongsTo(Thread, {

});