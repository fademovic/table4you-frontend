import Base from './Base';

export default Base.extend({
 
 currentUser: null,

 
 registerUser(user)  
 {
   return this.ajax({
     method: 'POST',
     url: '/v1/registration',
     data: JSON.stringify(user),
     contentType: "application/json",
     dataType: 'json',
     });//.then(function(response) { return JSON.parse(response.response); });
 },

 loginUser(email,password)
 {
   //treba mi nasljedjena iz options
   return this.ajax({
   method: 'POST',
   url: '/v1/login',
   data:JSON.stringify({email:email,password:password}),
   contentType: "application/json",
   dataType: 'json',
   //success: function(data){debugger;} 
 });
 },
 
 getCurrentUser()
 { 
   return this.ajax({
    method: 'GET',
    url: '/v1/getCurrentUser'
   });

   /*var deferred = Ember.$.Deferred();

debugger;
deferred.resolve({
    firstName:'Fadil',
    lastName:'Ademovic',
    email:'fadil.ademovic@gmail.com',
    phone:123456,
    password:123456,
    passwordConfirmation:123456,
    address:{
    city:'Sarajevo',
    country:'BiH',
    streetName:'Ulica'
     },
    gender:"male",
    birthdate:"16/01/1994"
    });

 return deferred.promise();*/
 },
 
 setCurrentUser(user)
 {   
    this.set('currentUser', user);
 },

 clearAuthToken()
 {
   localStorage.removeItem('USER-ACCESS-TOKEN');
 },

 logout: function() {
    this.clearAuthToken();
    this.setCurrentUser(null);
 }
   
});