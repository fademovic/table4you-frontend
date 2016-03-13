import Ember from 'ember';

export default Ember.Component.extend({  

    init(){

    Ember.run.scheduleOnce('afterRender', this, this.test);
},
  
      test:function(){
       
         var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: this.get('latitude'), lng: this.get('longitude')},
      zoom: 20
    });
      }

});