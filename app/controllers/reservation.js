import Ember from 'ember';

export default Ember.Controller.extend({

  ajax: Ember.inject.service('restaurants-service'),
  
  
  isReserved:false,

  init() {
    
    this.set('noPeople',localStorage.getItem("people"));
    this.set('timeReservation',localStorage.getItem("time"));
    this.set('dateReservation',localStorage.getItem("date"));
 
  },  
 
  
 actions:{
  complete: function () {
    this.set('isReserved',true);
  }
 }
    
});