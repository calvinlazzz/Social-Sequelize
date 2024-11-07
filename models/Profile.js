const { sequelize, Model, DataTypes } = require('../db/connection');
const {Sequelize} = require('sequelize');

let Profile = sequelize.define('Profile', {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
});


module.exports = Profile;