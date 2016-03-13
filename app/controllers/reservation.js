import Ember from 'ember';

export default Ember.Controller.extend({

  ajax: Ember.inject.service('restaurants-service'),
  reservation: Ember.inject.service('reservation-service'),


  init() {
    
    //Get reservation details from previous page
    //debugger;
    var reserve=this.get('reservation').getReservation();
    
    this.set('noPeople',reserve.people);
    this.set('timeReservation',reserve.time);
    this.set('dateReservation',reserve.date);
     
  },

 
    
});