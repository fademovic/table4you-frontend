import Ember from 'ember';


export default Ember.Component.extend({  
 
 value:0,
 
 ajax: Ember.inject.service('restaurants-service'), 
  init() {
    this._super.apply(this,arguments);
    
    this.get('ajax').getPopularRestaurants().done(data => {
      this.set('restaurants', data);
    });
  
  }, 
 
 //   maxWith: ,

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




 
            

 
            