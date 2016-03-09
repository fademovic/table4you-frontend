import Ember from 'ember';

export default Ember.Service.extend({
 
 reservation: null,
 
   setReservation(reserve)
 {   
    this.set('reservation',reserve);
 },

 getReservation()
 {
    return this.get('reservation');
 }

 
   
});