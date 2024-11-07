const { sequelize, Model, DataTypes } = require('../db/connection');
//const {Sequelize} = require('sequelize');

let User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
})

module.exports = User;