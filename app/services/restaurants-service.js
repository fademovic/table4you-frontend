import Base from './Base';

export default Base.extend({
 
	getPopularRestaurants() {
		return this.ajax({
			method: 'GET',
			url: '/v1/restaurants'
		});
	},
 
	getSingleRestaurant(id) {
		return this.ajax({
			method: 'GET',
			url: '/v1/restaurants/' + id,
		 
		});
	},
   
  completeReservation(reservation,id){
     
     return this.ajax({
     method: 'POST',
     url: '/v1/restaurants/'+ id + '/reservations',
     data: JSON.stringify(reservation),
     contentType: "application/json",
     dataType: 'json',
     });
  },

  addNewRestaurant(restaurant){
    return this.ajax({
     method: 'POST',
     url: '/v1/restaurants',
     data: JSON.stringify(restaurant),
     contentType: "application/json",
     dataType: 'json',
    });
  }

});