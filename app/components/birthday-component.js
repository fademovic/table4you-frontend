import Ember from 'ember';


export default Ember.Component.extend({  
 ajax: Ember.inject.service('user-service'),

  days: function() {
    var result = [];
    //var datum = new Date(); datum.getYear()
    for (var i =1; i <= 31; i++) {
     result.push(i);
    }
    return result.reverse();
    }.property(),

    years: function() {
    var result = [];
    //var datum = new Date(); datum.getYear()
    for (var i = 1950; i < 2016; i++) {
     result.push(i);
    }
     return result.reverse();
    }.property(),
    
    actions:{

      test: function()
      {
        alert(this.$( "#monthList" ).val());
        alert(this.$( "#dayList" ).val());
        alert(this.$( "#yearList" ).val());

      }
    } 
});      