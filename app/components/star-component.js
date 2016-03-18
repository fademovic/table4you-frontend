import Ember from 'ember';

export default Ember.Component.extend({  


  stars: function() {
    var result=[];
    var rating=this.get('rating');

    for(var i=1;i<=5;i++)
    {
      result.push({isFilled: i<= rating}); // isFilled: true ili false ce biti
    }
     
    return result;
  }.property('rating')




});    