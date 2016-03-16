import Ember from 'ember';


export default Ember.Component.extend({  
 
 value:0,

 isLoading: false,
 
 ajax: Ember.inject.service('restaurants-service'), 
  init() {
    this._super.apply(this,arguments);
    
    this.set('isLoading',true);
      
      this.get('ajax').getPopularRestaurants().done(data => {
      this.set('restaurants', data);
      
    this.set('isLoading',false);
    });

   
 
  },
 
    actions: {
      leftSlide: function() 
        {   
            this.$( "div.horizontal-slider" ).animate({scrollLeft: '+=-200px'},"slow");//slow ili velicina(600 700..)

           // this.set('value',this.get('value')-150);
       
        },

        rightSlide: function() 
        {            
            this.$( "div.horizontal-slider" ).animate({scrollLeft: '+=200px'},"slow");
                        
                        //this.set('value',this.get('value')+150);
        },
    
    }
});




 
            

 
            