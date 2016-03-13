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

  this.set('id',this.get("restaurantReservation")),

   this.get('reservation').setReservation({
    people:this.get("noPeople"),
    time:this.get("timeReservation"),
    date:this.get("dateReservation")
 });

   
   
}

}

});   