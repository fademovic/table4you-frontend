import Ember from 'ember';

export default Ember.Component.extend({  
    
  ajax: Ember.inject.service('restaurants-service'),
  init() {
    this._super.apply(this,arguments);
    
    this.get('ajax').getPopularRestaurants().done(data => {
      this.set('restaurants', data);
    });  

  },

actions:{
  myValueDidChange: function() {
   this.get('ajax').setReservation({
    people:this.get("noPeople"),
    time:this.get("timeReservation"),
    date:this.get("dateReservation"),
    restaurant:this.get("restaurantReservation")
 });

}

}

});   