import Ember from 'ember';

export default Ember.Service.extend({
  // get, post 	authToken: null,
  // Ember.$.ajax - vraca Promise

  authToken: null,

  init: function(argument) {
  this._super.apply(this, arguments);

  this.set('authToken', localStorage.getItem('USER-ACCESS-TOKEN'));
  },  

  ajax: function(options) {
    var params = {}
    //duplicirati options
   /* duplicate options; Ember.merge...
    {
      headers: function() {
        return {
          "USER-ACCESS-TOKEN":this.get("session.authToken"),
        };
      }
    }*/
    return Ember.$.ajax(options);
  },

  setAccessToken: function(authToken)
  {
    this.set('authToken', authToken);
    window.localStorage.setItem('USER-ACCESS-TOKEN', authToken);
  }

  //clearAccessToken:
});