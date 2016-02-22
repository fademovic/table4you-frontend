import Ember from 'ember';

var value=150;
var tmp=0;
var tmp1=0;


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
            if(value==900)
              value=750;

            this.$( "div.horizontal-slider" ).scrollLeft( value );
            value+=-150;
            
            if(value==-150)
            value=0;

        },

        rightSlide: function() 
        {
            if(value==0)
              value=150;
            
            this.$( "div.horizontal-slider" ).scrollLeft( value );
            value+=150;

            if(value>900)
                value=900;
            
       

        },

    

    }
});




 
            

 
            