import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	//dinamicka ruta, koja zavisi od IDa restorana
	this.route('restaurants',{ path: 'restaurants/:restaurantId' });
  this.route('reservation',{ path: 'restaurants/:restaurantId/reservation'});
  this.route('current-user');
  this.route('admin-panel');

});

export default Router;
