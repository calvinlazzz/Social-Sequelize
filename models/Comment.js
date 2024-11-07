const {  Model, DataTypes, sequelize } = require('../db/connection');
const {Sequelize} = require('sequelize');

let Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})



module.exports = Comment;