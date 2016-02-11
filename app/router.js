import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	//dinamicka ruta, koja zavisi od IDa restotrana
	this.route('restaurants',{ path: 'restaurants/:restaurantId' });
});

export default Router;
