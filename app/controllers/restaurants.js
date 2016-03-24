
import Ember from 'ember';

export default Ember.Controller.extend({

 ajax: Ember.inject.service('restaurants-service'),

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

  rate5:function()
  {
   

    $( "#span1" ).addClass( "star-filled" );
    $( "#span2" ).removeClass( "star-filled" );
    $( "#span3" ).removeClass( "star-filled" );
    $( "#span4" ).removeClass( "star-filled" );
    $( "#span5" ).removeClass( "star-filled" );

    $( ".rate-label" ).text("It is not good rating, please contact us so we can be better.");

    this.get('ajax').rate("",1,this.get('model').restaurantId);

    

  },

    rate4:function()
  {
    $( "#span1" ).addClass( "star-filled" );
    $( "#span2" ).addClass( "star-filled" );
    $( "#span3" ).removeClass( "star-filled" );
    $( "#span4" ).removeClass( "star-filled" );
    $( "#span5" ).removeClass( "star-filled" );

    $( ".rate-label" ).text("We always  can better, please contact us and give us your feedback");

    this.get('ajax').rate("",2,this.get('model').restaurantId);
  },

    rate3:function()
  {
    alert(3);
    $( "#span1" ).addClass( "star-filled" );
    $( "#span2" ).addClass( "star-filled" );
    $( "#span3" ).addClass( "star-filled" );
    $( "#span4" ).removeClass( "star-filled" );
    $( "#span5" ).removeClass( "star-filled" );

    $( ".rate-label" ).text("Thank you for your vote");

    this.get('ajax').rate("",3,this.get('model').restaurantId);
  },

    rate2:function()
  {
    alert(4);
    $( "#span1" ).addClass( "star-filled" );
    $( "#span2" ).addClass( "star-filled" );
    $( "#span3" ).addClass( "star-filled" );
    $( "#span4" ).addClass( "star-filled" );
    $( "#span5" ).removeClass( "star-filled" );

    $( ".rate-label" ).text("Very good, we are proud of ourselves");

    this.get('ajax').rate("",4,this.get('model').restaurantId);

  },

    rate1:function()
  {
    alert(5);
    $( "#span1" ).addClass( "star-filled" );
    $( "#span2" ).addClass( "star-filled" );
    $( "#span3" ).addClass( "star-filled" );
    $( "#span4" ).addClass( "star-filled" );
    $( "#span5" ).addClass( "star-filled" );

    $( ".rate-label" ).text("Excellent, we are glad you enjoyed in our restaurant");

    this.get('ajax').rate("",5,this.get('model').restaurantId);
  },

}
  
});