import Ember from 'ember';


export default Ember.Component.extend({  
 ajax: Ember.inject.service('user-service'),

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
        
        setAccessToken('authToken', response.authToken);
        // Spasiti token u browser  
        // refresh stranice
        window.location.reload(true);
      }.bind(this))
      .fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));
    }
 
    
  }
  
});
