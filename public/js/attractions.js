'use strict';
/* global $ attractionModule $hotels $restaurants $activities */

/**
 * This module holds collection of enhanced attraction objects which can be
 * easily looked up by type and id. It is primarily used when someone clicks
 * to add an attraction in the `options` module.
 */

const attractionsModule = (function () {


  // ~~~~~~~~~~~~~~~~~~~~~~~
    // These constiables are not available until after the AJAX request succeeds in `options.js`. You definitely need to update something here!
  // ~~~~~~~~~~~~~~~~~~~~~~~
  const enhanced = {
    hotels: .map(attractionModule.create),
    restaurants: restaurants.map(attractionModule.create),
    activities: activities.map(attractionModule.create)
  }

  // private helper methods (only available inside the module)

  function findById (array, id) {
    return array.find(function (el) {
      return +el.id === +id;
    });
  }

  // globally accessible module methods (available to other modules)

  const publicAPI = {

    getByTypeAndId: function (type, id) {
      if (type === 'hotel') return findById(enhanced.hotels, id);
      else if (type === 'restaurant') return findById(enhanced.restaurants, id);
      else if (type === 'activity') return findById(enhanced.activities, id);
      else throw Error('Unknown attraction type');
    },

    getEnhanced: function (databaseAttraction) {
      const type = databaseAttraction.type;
      const id = databaseAttraction.id;
      const found = publicAPI.getByTypeAndId(type, id);
      if (found) return found;
      throw Error('enhanced version not found', databaseAttraction);
    }

  };

  return publicAPI;

}());
