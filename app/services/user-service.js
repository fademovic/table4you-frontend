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