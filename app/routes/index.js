import Ember from 'ember';


export default Ember.Route.extend({
 //trebalo navesti ime servisa u zagradi
 ajax: Ember.inject.service('restaurants-service'),

  model() {

    return this.get('ajax').getPopularRestaurants();

  },
});