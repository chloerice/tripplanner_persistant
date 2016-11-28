'use strict';
/* global $ tripModule attractionsModule*/

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */

$(function(){

  // jQuery selects
  const $optionsPanel = $('#options-panel');
  const $hotelSelect = $optionsPanel.find('#hotel-choices');
  const $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  const $activitySelect = $optionsPanel.find('#activity-choices');

  // ~~~~~~~~~~~~~~~~~~~~~~~
    // This looks like a great place to start AJAX work with a request for all attractions. Don't forget that these kinds of requests are async, so we won't have all of the attractions until it comes back, but once it comes back we can make the option tags
  // ~~~~~~~~~~~~~~~~~~~~~~~

  // make all the option tags (second arg of `forEach` is a `this` binding)

  //variables to hold onto our attraction db objects
  let $hotels, $restaurants, $activities;

  $.get('/api/hotels')
    .then(function (hotelArr) {
      hotelArr.forEach(makeOption, $hotelSelect);
      $hotels = hotelArr;
    }).catch(console.error);

  $.get('/api/restaurants')
    .then(function (restaurantsArr) {
      restaurantsArr.forEach(makeOption, $restaurantSelect);
      $restaurants = restaurantsArr;
    }).catch(console.error);

  $.get('/api/activities')
    .then(function (activitiesArr) {
      activitiesArr.forEach(makeOption, $activitySelect);
      $activities = activitiesArr;
    }).catch(console.error);

  function makeOption (databaseAttraction) {
    const $option = $('<option></option>') // makes a new option tag
      .text(databaseAttraction.name)
      .val(databaseAttraction.id);
    this.append($option); // add the option to the specific select
  }

  // what to do when the `+` button next to a `select` is clicked
  $optionsPanel.on('click', 'button[data-action="add"]', function () {
    const $select = $(this).siblings('select');
    const type = $select.data('type'); // from HTML data-type attribute
    const id = $select.find(':selected').val();
    // get associated attraction and add it to the current day in the trip
    const attraction = attractionsModule.getByTypeAndId(type, id);
    tripModule.addToCurrent(attraction);
  });

});
