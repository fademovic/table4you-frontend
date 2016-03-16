
import Ember from 'ember';

export default Ember.Controller.extend({

  reservation: Ember.inject.service('reservation-service'),
  init() {
    this._super.apply(this,arguments);
  },
  
  coordinate: function() {
    //var proba=this.get('model')
    //this.get('model') to access model from controller
    return Ember.A([
       {title: this.get('model').name, lat: this.get('model').coordinates.latitude, lng: this.get('model').coordinates.longitude,isInfoWindowVisible: true },
    ]); 
  }.property(),

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