/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const db = require('./_db');
const Place = require('./place');

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  num_stars: {
    type: Sequelize.INTEGER,
    validate: { min: 1, max: 5 }
  },
  amenities: Sequelize.STRING
}, {
  defaultScope: {
    include: [Place]
  },
  getterMethods: {
    type: function () {
      return 'hotel';
    }
  }
});

module.exports = Hotel;
