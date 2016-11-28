const apiRouter = require('express').Router();
const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');

apiRouter.get('/hotels', function (req, res, next) {
  Hotel.findAll()
    .then(function (hotelList) {
      res.send(hotelList);
    }).catch(next);
});

apiRouter.get('/restaurants', function (req, res, next) {
  Restaurant.findAll()
    .then(function (restaurantList) {
      res.send(restaurantList);
    }).catch(next);
});

apiRouter.get('/activities', function (req, res, next) {
  Activity.findAll()
    .then(function (activityList) {
      res.send(activityList);
    }).catch(next);
});

apiRouter.use('/days', require('./days'));

module.exports = apiRouter;
