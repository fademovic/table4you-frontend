import Base from './Base';

export default Base.extend({
	getPopularRestaurants() {
		return this.ajax({
			method: 'GET',
			url: '/restaurants'
		});
	},

	getSingleRestaurant(id) {
		return this.ajax({
			method: 'GET',
			url: '/restaurants/' + id,
		 
		});
	}
});