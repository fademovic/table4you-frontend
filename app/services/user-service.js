import Base from './Base';

export default Base.extend({
 
 //ja msm da treba da ima veze sa setCurrentUser
 currentUser: null,


 registerUser(user)
 {
   return this.ajax({
     method: 'POST',
     url: '/registration',
     data: user});
 },

 loginUser(email,password)
 {
   //treba mi nasljedjena iz options
   return this.ajax({
   method: 'POST',
   url: '/login',
   data:{email:email,password:password}, 
 });
 },

 getCurrentUser()
 {
   return this.ajax({
    method: 'GET',
    url: '/current-user'
   });
 },
 
 setCurrentUser(user)
 {   //ovo mi je suhveli
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