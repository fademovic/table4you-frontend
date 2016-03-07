import UserService from '../services/user-service'; //putanja user-service servisa


function injectUserService(application, userService) {
  application.register('custom:user-service', userService, { instantiate: false, singleton: true });


    application.inject('route','userService', 'custom:user-service');
    application.inject('component','userService', 'custom:user-service');
     application.inject('controller','userService', 'custom:user-service');
}

export function initialize(application) {
  var userService = UserService.create();

  // false, 0, null, undefined, ""
  if (userService.get('authToken')) {
    application.deferReadiness();

    userService.getCurrentUser()
      .done(function(response) {
        userService.setCurrentUser(response);

        injectUserService(application, userService)
        application.advanceReadiness();
      })
      .fail(function() {
        userService.clearAuthToken();

        injectUserService(application, userService)
        application.advanceReadiness();
      });
  } else {
    injectUserService(application, userService);
  }

}

export default {

  name: 'current-user',
  after: 'ember-cli-mirage',
  initialize: function(registry, application) {
    initialize(application);  
  }

};
