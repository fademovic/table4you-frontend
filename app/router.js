import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	//dinamicka ruta, koja zavisi od IDa restorana
	this.route('restaurants',{ path: '/v1/restaurants/:restaurantId' });
	this.route('login');
	this.route('registration');
  this.route('reservation');
});

export default Router;
