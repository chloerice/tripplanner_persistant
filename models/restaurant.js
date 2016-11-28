const Sequelize = require('sequelize');
const db = require('./_db');
const Place = require('./place');

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  price: {
    type: Sequelize.INTEGER,
    validate: { min: 1, max: 5 }
  },
  cuisine: Sequelize.STRING
}, {
  defaultScope: {
    include: [Place]
  },
  getterMethods: {
    type: function () {
      return 'restaurant';
    }
  }
});

module.exports = Restaurant;
