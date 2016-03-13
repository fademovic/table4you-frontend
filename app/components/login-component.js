import Ember from 'ember';

export default Ember.Component.extend({  
  
  ajax: Ember.inject.service('user-service'), 

  actions: 
  {
    
      onLogin: function() {
      
    debugger;
      this.get('ajax').loginUser({
        email: this.get('mail'),
        password: this.get('pass')
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
      
      $("#loginModal").modal("toggle");

    }

  }

});
