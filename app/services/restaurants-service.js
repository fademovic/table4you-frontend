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


});