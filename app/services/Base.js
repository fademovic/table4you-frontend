import Ember from 'ember';

export default Ember.Service.extend({
	// get, post
	// Ember.$.ajax - vraca Promise
	ajax: function(options) {
		return Ember.$.ajax(options);
	}
});