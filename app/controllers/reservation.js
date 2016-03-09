import Ember from 'ember';

export default Ember.Controller.extend({

  ajax: Ember.inject.service('restaurants-service'),
  reservation: Ember.inject.service('reservation-service'),
  init() {
    this._super.apply(this,arguments);
    
    this.get('ajax').getPopularRestaurants().done(data => {
      this.set('restaurants', data);     
    });

    //Get reservation details from previous page
    var reserve=this.get('reservation').getReservation();
    
    this.set('noPeople',reserve.people);
    this.set('timeReservation',reserve.time);
    this.set('dateReservation',reserve.date);
    this.set('restaurantReservation',reserve.restaurant);
      
  },

  actions:{
    test:function()
    { 
      var reserve=this.get('reservation').getReservation();
      var rest=this.get('ajax').getPopularRestaurants();
      
      alert(this.get('noPeople'));
      
    }
  }
    

});