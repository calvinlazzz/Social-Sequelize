const { sequelize, Model, DataTypes } = require('../db/connection');
const {Sequelize} = require('sequelize');

let Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})


module.exports = Post;