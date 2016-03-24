import Ember from 'ember';


export default Ember.Component.extend({  

  ajax: Ember.inject.service('restaurants-service'),

  actions:{
  addRestaurant: function () {
    this.get('ajax').addNewRestaurant({ 
    name : this.get('name'),
    address : {
    streetName : this.get('street'),
    city : this.get('city'),
    country : this.get('country')
    },
    coordinates : {
    latitude : parseFloat(this.get('latitude')),
    longitude : parseFloat (this.get('longitude'))
    },
    phone : parseInt(this.get('phone')),
    workingHours : this.get('hours'),
    rating : parseFloat(this.get('rating')),
    reservationPrice : parseFloat(this.get('price')),
    deals : this.get('deals'),
}).fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));


  }
 }

}); 