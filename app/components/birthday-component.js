    import Ember from 'ember';


    export default Ember.Component.extend({  
       
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
  


   onSelectedDay: function() {
      this.attrs.day.update(this.$("#dayList").val());
  },
  onSelectedMonth: function() {
      this.attrs.month.update(this.$("#monthList").val());
  },
  onSelectedYear: function() {
      this.attrs.year.update(this.$("#yearList").val());
  },
} 
});      