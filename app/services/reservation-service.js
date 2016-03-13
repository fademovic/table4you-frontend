import Ember from 'ember';

export default Ember.Service.extend({
 
 reservation: Ember.Object.create(),
 
   setReservation(reserve)
 {   
    this.get('reservation').setProperties(reserve);
 },

 getReservation()
 {
    return this.get('reservation');
 }

 
   
});