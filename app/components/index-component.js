import Ember from 'ember';

var value=0;


export default Ember.Component.extend({  

 ajax: Ember.inject.service('restaurants-service'), 
  init() {
    this._super.apply(this,arguments);
    
    this.get('ajax').getPopularRestaurants().done(data => {
      this.set('restaurants', data);
    });

    this.test;

  }, 
 

    actions: {
     
        test:function()
        {
            for(var i=1;i<=10;i++)
             {  
               document.getElementById("span"+i).innerHTML ="&#9733";
               document.getElementById("span"+i).style.color = "gold";

             }
                      
        },

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

    

    }
});




 
            

 
            