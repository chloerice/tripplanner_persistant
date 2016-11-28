/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const db = require('./_db');
const Place = require('./place');

const Activity = db.define('activity', {
  name: Sequelize.STRING,
  age_range: Sequelize.STRING
}, {
  defaultScope: {
    include: [Place]
  },
  getterMethods: {
    type: function () {
      return 'activity';
    }
  }
});

module.exports = Activity;
