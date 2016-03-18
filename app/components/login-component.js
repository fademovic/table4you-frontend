import Ember from 'ember';

export default Ember.Component.extend({  
  
  ajax: Ember.inject.service('user-service'), 
  
  actions: 
  { 
     
      onLogin: function() {
      
  
      this.get('ajax').loginUser(this.get('mail'),this.get('pass')).done(function(response) {
        this.get('ajax').setAccessToken(response.token);

          this.get('ajax').getCurrentUser()
            .done(function(response) {
              this.get('ajax').setCurrentUser(response);
            }.bind(this));

      }.bind(this))
      .fail(function(response) {
        this.set('error', response.errorMessage);
      }.bind(this));
      

      $("#noviModal").modal("toggle");
        

    }
 
  }

});
