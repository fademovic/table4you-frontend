import Ember from 'ember';


export default Ember.Component.extend({  
 ajax: Ember.inject.service('user-service'),

 month:0,  
 day:0,
 year:0,

 actions: 
 {   
 
    
      onRegister: function() {
      
   
     //POST 
      this.get('ajax').registerUser({
          email: this.get("emailReg"), 
          password: this.get("pwdReg"),          
          passwordConfirmation: this.get("pwdConfirmation"),  
          firstName: this.get("firstName"),
          lastName: this.get("lastName"),
          address:{
          city: this.get("city"),   
          country: this.get("country"),
          streetName: this.get("streetName")},
          phone: this.get("tel"),
          gender:this.$( "input:checked" ).val(),
          birthdate:this.get('day')+"/"+this.get('month')+"/"+this.get('year'),   
      }).done(function(response) {
        this.get('ajax').setAccessToken(response.token);

          this.get('ajax').getCurrentUser().done(function(response) {
              this.get('ajax').setCurrentUser(response);
            }.bind(this));

      }.bind(this))
      .fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));
  debugger;
      $("#noviModal").modal("toggle");
  
    

    },
     



   


 
    
  }
    
  
});
