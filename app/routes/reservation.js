import Ember from 'ember';


export default Ember.Route.extend({ 
ajax: Ember.inject.service('restaurants-service'),

    model(params) {

    return this.get('ajax').getSingleRestaurant(params.restaurantId);

  },

});    