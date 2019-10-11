const db = require('../db');
const User = require('./user_model');
const Post = require('./post_model');

/**
 * associations
 */
User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  db,
  User,
  Post,
};
