import Ember from 'ember';

export default Ember.Controller.extend({

 reg:null,
 log:null,

 actions: {
  
  activeRegistration:function(){
    this.set('log',null);
    this.set('reg',"active");
  },
 
  activeLogin:function(){
    this.set('reg',null);
    this.set('log',"active");

  }
}

});