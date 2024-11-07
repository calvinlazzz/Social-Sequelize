const {  Model, DataTypes, sequelize } = require('../db/connection');
const {Sequelize} = require('sequelize');

let Like = sequelize.define('Like', {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
})


module.exports = Like;