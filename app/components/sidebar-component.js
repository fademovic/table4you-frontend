 import Ember from 'ember';

 export default Ember.Component.extend({

   didInsertElement:function(){
     $('#sidebar').affix({
      offset: {
        top: $('#header').height()
      }
    }); 

   },

   actions:{

    myValueDidChange: function() {

     this.get('reservation').setReservation({
      people:this.get("noPeople"),
      time:this.get("timeReservation"),
      date:this.get("dateReservation")
    });

     
   },
   scrollMap:function(){

    $('#sidebar').affix({
      offset: {
        top: $('#header').height()
      }
    });

    $("html, body").animate({ scrollTop: 200 }, "slow");

    $('#aboutActive').removeClass('active');
    $('#reservationActive').removeClass('active');

    if (!$('#mapActive').hasClass('active')) {
      $('#mapActive').addClass('active');
    }

  },

  scrollAbout:function(){
    

    $("html, body").animate({ scrollTop: 800 }, "slow");

    $('#mapActive').removeClass('active');
    $('#reservationActive').removeClass('active');

    
    if (!$('#aboutActive').hasClass('active')) {
      $('#aboutActive').addClass('active');
    }


  },

  scrollReservation:function(){
    

    $("html, body").animate({ scrollTop: 1200 }, "slow");

    $('#aboutActive').removeClass('active');
    $('#mapActive').removeClass('active');

    
    if (!$('#reservationActive').hasClass('active')) {
      $('#reservationActive').addClass('active');
    }


  },



}

});   