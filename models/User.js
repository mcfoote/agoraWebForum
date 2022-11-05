const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {

    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }

}

User.init(
    
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
              },
        },
    },

    {
        hooks: {
            beforeCreate: async (nUserData) => {
                nUserData.password = await bcrypt.hash(nUserData.password, 10);
                return nUserData;
            },
            beforeUpdate: async (updateUserData) => {
                updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
                return updateUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'user',
    }

);

module.exports = User;