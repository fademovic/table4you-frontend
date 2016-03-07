import Ember from 'ember';


export default Ember.Route.extend({ 
    ajax: Ember.inject.service('restaurants-service'),
    
    actions:{
  test: function() {
    var test=this.get('ajax').getReservation();
    
    this.set('noPeople',test.people);

   alert(test.people+" "+test.time+" "+test.date+" "+test.restaurant);
 }
}

});    