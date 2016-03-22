import Ember from 'ember';


export default Ember.Route.extend({

ajax: Ember.inject.service('restaurants-service'),

    model() {

    return this.get('ajax').getPopularRestaurants();

  },
  
});  