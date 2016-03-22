import Ember from 'ember';


export default Ember.Component.extend({  

textC:null,

 ajax: Ember.inject.service('restaurants-service'), 
  init() {
    this._super.apply(this,arguments);
  
      
      this.get('ajax').getSingleRestaurant(this.get('idColapse')).done(data => {
      this.set('restaurants', data);
  
      
    });

  },

  actions:{
    saveChanges:function()
    {
       this.set('textC',"You make changes. Are you sure you want to proceed ?")
    },

    deleteChanges:function()
    {
       this.set('textC',"Are you sure you want to delete restaurant ?") 
    }
  }


});