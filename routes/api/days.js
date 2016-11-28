const dayRouter = require('express').Router();
const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');
const Day = require('../../models/day');
const db = require('../../models/_db');

//List all days
dayRouter.get('/', function (req, res, next) {
  Day.findAll()
    .then(function (dayList) {
      res.send(dayList);
    }).catch(next);
});

//Create a day
dayRouter.post('/', function (req, res, next) {
  Day.create()
    .then(function (day) {
      res.status(201).send(day);
    }).catch(next);
});

//Add an activity to a day
dayRouter.post('/:dayId/:activity/:activityId', function (req, res, next) {
  const dayId = Number(req.params.id);
  const activity = req.params.activity;
  const activityId = Number(req.params.activityId);

  switch(activity) {
    case 'hotel': {
      //find the right hotel whose dayId needs updating
      //update that hotel
      //send success response
      //catch any errors
      Day.setHotel(activityId)
        .then(function () {
          res.sendStatus(201);
          break;
        });
    }

    case 'restaurants': {
      //do something in day_restaurant table
      Day.findOrCreate(dayId)
        .then(function (day) {
          day.setRestaurant(restaurantId);
        }).catch(next);
    }

    case 'activities': {
      //do something in day_activity table
      Day.setActivity()
        .then(function (day) {

        }).catch(next);
    }
});

//Remove Day
dayRouter.delete('/:id', function (req, res, next) {

});

module.exports = dayRouter;
