const Promise = require('bluebird');
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Day = require('../models/day');

router.use('/api', require('./api/attractions'));

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
