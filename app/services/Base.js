import Ember from 'ember';
 
export default Ember.Service.extend({
  // get, post 	authToken: null,
  // Ember.$.ajax - vraca Promise

  authToken: null, 

  init: function(argument) {
  this._super.apply(this, arguments);
debugger;
  this.set('authToken', localStorage.getItem('USER-ACCESS-TOKEN'));
  debugger;
  },  
 
  ajax: function(options) {
    debugger;
    var self=this;
    var params = {}
   
    Ember.merge(params,options);
   if(this.get('authToken')){
    Ember.merge(params,{
      headers: {
          "USER-ACCESS-TOKEN":self.get("authToken"),
        }
    });
   }
   
    return Ember.$.ajax(params);
 debugger;
  },

  setAccessToken: function(authToken)
  {
    this.set('authToken', authToken);
    debugger;
    window.localStorage.setItem('USER-ACCESS-TOKEN', authToken);
  }

});