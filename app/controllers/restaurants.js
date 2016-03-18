
import Ember from 'ember';

export default Ember.Controller.extend({

  init() {
    this._super.apply(this,arguments);

  },
   
 coordinate: function() {
    //var proba=this.get('model')
    //this.get('model') to access model from controller
    return Ember.A([
       {title: this.get('model').name, lat: this.get('model').coordinates.latitude, lng: this.get('model').coordinates.longitude,isInfoWindowVisible: true },
    ]); 
  }.property('model'), //property() ->static jednom se izvrsi i to je to

 
 actions:{

   myValueDidChange: function() {

   localStorage.setItem("people", this.get("noPeople"));
    localStorage.setItem("time", this.get("timeReservation"));
    localStorage.setItem("date",this.get("dateReservation"));
  
   
},
}
  
});