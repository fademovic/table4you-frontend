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
     

 actions:
 { 
  
      onRegister: function() {
      this.get('ajax').registerUser({
          firstName: this.get("firstName"),
          lastName: this.get("lastName"),
          email: this.get("emailReg"), 
          phone: this.get("tel"),
          pass: this.get("pwdReg"),          
          passConfirmation: this.get("pwdConfirmation"),
          city: this.get("city"),   
          country: this.get("country"),
          streetName: this.get("streetName")
      }).done(function(response) { 
        
        this.get('ajax').setAccessToken(response.authToken);
        this.userService.getCurrentUser()
             .done(function(response) {
               this.userService.setCurrentUser(response);
             }.bind(this));

      }.bind(this))
      .fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));
    
      $("#signUpModal").modal("toggle");
    },

   


 
    
  }
    
  
});
