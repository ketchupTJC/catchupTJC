const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('Post', {
  post: {
    type: Sequelize.TEXT,
    defaultValue:
      'Lorem ipsum dolor sit amet, tempor vocent quaerendum te quo, ex cibo epicuri disputationi mea. Eos congue verear interesset et, eum at deseruisse voluptatibus. Cu vix nulla movet labitur. Tale congue expetenda pri no, probo tibique no mei. In per tritani evertitur consequuntur. Amet theophrastus usu ea, corpora senserit dignissim in vis. Mei primis possit tacimates ut, ne esse prima detraxit pri, eros libris complectitur ut pro.',
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue:
      'Lorem ipsum dolor sit amet, tempor vocent quaerendum te quo, ex cibo epicuri disputationi mea. Eos congue verear interesset et, eum at deseruisse voluptatibus. Cu vix nulla movet labitur. Tale congue expetenda pri no, probo tibique no mei.',
    allowNull: false,
  },
  title: {
    type: Sequelize.TEXT,
    defaultValue: 'Lorem ipsum dolor',
  },
});

module.exports = Post;
