const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('User', {
  firstName: {
    type: Sequelize.STRING,
    defaultValue: 'Adam',
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: 'Eve',
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.FLOAT,
    unique: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = User;
