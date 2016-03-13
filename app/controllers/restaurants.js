
import Ember from 'ember';

export default Ember.Controller.extend({

  reservation: Ember.inject.service('reservation-service'),
  init() {
    this._super.apply(this,arguments);
  },
  

actions:{
  myValueDidChange: function() {

   this.get('reservation').setReservation({
    people:this.get("noPeople"),
    time:this.get("timeReservation"),
    date:this.get("dateReservation")
 });

   
   
}

}

});