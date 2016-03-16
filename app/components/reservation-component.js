import Ember from 'ember';

export default Ember.Component.extend({  
    
  ajax: Ember.inject.service('restaurants-service'),
  reservation: Ember.inject.service('reservation-service'),
  init() {
    this._super.apply(this,arguments);
    
    this.get('ajax').getPopularRestaurants().done(data => {
      this.set('restaurants', data);
    });   
     
  },
    
  id:0,


actions:{
  myValueDidChange: function() {
  
  this.set('id',this.get("restaurantReservation"));  

    localStorage.setItem("people", this.get("noPeople"));
    localStorage.setItem("time", this.get("timeReservation"));
    localStorage.setItem("date",this.get("dateReservation"));
  
},

}

});   