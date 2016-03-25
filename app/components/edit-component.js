import Ember from 'ember';


export default Ember.Component.extend({  

 ajax: Ember.inject.service('restaurants-service'), 
 init() {
  this._super.apply(this,arguments);
  
  
  this.get('ajax').getSingleRestaurant(this.get('idColapse')).done(data => {
    this.set('restaurants', data);
    
    
  });

},

actions:{
  saveChanges:function()
  {

    var r = confirm("You make changes. Are you sure you want to proceed ?");
    if (r == true) {
      
     this.get('ajax').updateRestaurant({ 
       name : this.get('restaurants.name'),
       address : {
         streetName : this.get('restaurants.address.streetName'),
         city : this.get('restaurants.address.city'),
         country : this.get('restaurants.address.country')
       },
       coordinates : {
         latitude : parseFloat(this.get('restaurants.coordinates.latitude')),
         longitude : parseFloat (this.get('restaurants.coordinates.longitude'))
       },
       phone : parseInt(this.get('restaurants.phone')),
       workingHours : this.get('restaurants.workingHours'),
       rating : parseFloat(this.get('restaurants.rating')),
       reservationPrice : parseFloat(this.get('restaurants.reservationPrice')),
       deals : this.get('restaurants.deals'),

     },this.get('idColapse')).done(function() {
        location.reload();
 
      }.bind(this)).fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));
    

   } 

 },

 deleteChanges:function()
 {

   var r=confirm("Are you sure you want to delete restaurant ?") 
   if(r=true)
   {
    this.get('ajax').deleteRestaurant(this.get('idColapse')).done(function() {
        
        location.reload();
 
      }.bind(this)).fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));

  }
  
}
}


});