const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Thread extends Model {};

Thread.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        thread_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        board_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'thread', 
    }
);

module.exports = Thread;