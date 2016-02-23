import Ember from 'ember';


export default Ember.Component.extend({  
 
 value:150,

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
            
            // this.$(..).postion(); find with
            /*if(value==900)
              value=750;*/
           
            this.$( "div.horizontal-slider" ).scrollLeft( this.get('value') );
            

            this.set('value',this.get('value')-150);
            
            
            /*if(value==-150)
            value=0;*/

        },

        rightSlide: function() 
        {   
            /*if(value==0)
              value=150;*/
          
            this.$( "div.horizontal-slider" ).scrollLeft( this.get('value') );
                        this.set('value',this.get('value')+150);
            /*
            if(value>900)
                value=900;*/
            
       

        },

    

    }
});




 
            

 
            