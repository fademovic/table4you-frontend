import Ember from 'ember';
//ovdje akcije
var value=0;


export default Ember.Component.extend({  

 ajax: Ember.inject.service('restaurants-service'), 
  init() {
    this._super.apply(this,arguments);
    this.get('ajax').getPopularRestaurants().done(data => {
      this.set('restaurants', data);
    });
  },

    actions: {
        leftSlide: function() 
        {
            
            this.$( "div.horizontalSlider" ).scrollLeft( value );
            value+=-100;

            
            
        },

        rightSlide: function() 
        {
            
            this.$( "div.horizontalSlider" ).scrollLeft( value );
            value+=100;

        },

    populateMap: function() {
    //Get store
    var store = this.get('data');
    //Search Store
    store.map(item => {
        console.log(item.get('name'));
    });
}
    }
});




 
            

 
            