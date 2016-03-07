import Base from './Base';

export default Base.extend({
  reservation:null,

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

	 setReservation(reserve)
 {   
    this.set('reservation',reserve);
 },

 getReservation()
 {
 	  return this.get('reservation');
 }

});