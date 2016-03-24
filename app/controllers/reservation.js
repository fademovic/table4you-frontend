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

var date = new Date($('#date-input').val());
  var day = date.getDate();
  var month = date.getMonth() + 1;
   var year = date.getFullYear();
  

    this.get('ajax').completeReservation({
          guestCount:parseFloat(this.get("noPeople")), 
          dateTime: [day, month, year].join('/') + " "+ this.get("timeReservation") +":00",          
          note:this.get("note")     
      },this.get('model').restaurantId).fail(function(response) {
        this.set('error', response.errorMessage);
        alert(response.error);
      }.bind(this));
  
    //this.set('isReserved',true);
  }
 }
    
});