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
    alert(this.get("note"));
    this.get('ajax').completeReservation({
          guestCount: this.get("noPeople"), 
          dateTime:  this.get("dateReservation") + " " + this.get("timeReservation"),          
          message: this.get("note")     
      },this.get('model').restaurantId).fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));

    this.set('isReserved',true);
  }
 }
    
});