import Ember from 'ember';


export default Ember.Component.extend({  
 ajax: Ember.inject.service('user-service'),

 month:0,
 day:0,
 year:0,

 actions:
 { 
 
    
      onRegister: function() {
      
     
      //REGEX
      var ck_name = /^[A-Za-z]{2,20}$/;
      var ck_tel=/^[0-9]{6,20}$/;
      var ck_pass = /^[A-Za-z0-9!"#$%&/()=?*"_:;,.+''<>@]{6,20}$/;
      var ck_email = /^[A-Za-z0-9._-]+@+[a-z]+\.+[a-z]/;
      
      //VALIDATION
      //invalid input
      if (!ck_email.test(this.get("emailReg")) || !ck_pass.test(this.get("pwdReg")) || !ck_pass.test(this.get("pwdConfirmation")) || !ck_name.test(this.get("firstName")) || !ck_name.test(this.get("lastName")) || !ck_name.test(this.get("city")) || !ck_name.test(this.get("country")) || !ck_name.test(this.get("streetName")) || !ck_tel.test(this.get("tel")) ) {
        this.$( "#invalidParagraph" ).html("Invalid input!");
      }
      else {
        this.$( "#invalidParagraph" ).html("");
      }

      //input field 
      if(!this.get("firstName") || !this.get("lastName") || !this.get("streetName") ||!this.get("country") || !this.get("city")|| !this.get("pwdConfirmation") || !this.get("pwdReg") || !this.get("emailReg")){ 
        this.$( "#emptyParagraph" ).html("There is empty field!");
      }
      else {
        this.$( "#emptyParagraph" ).html("");
      }
       
       //red and green border
      if(!this.get("firstName") || !ck_name.test(this.get("firstName"))){  
        this.$( ".invalidBorder1" ).css("border-color","red");
      }
       
       else if(this.get("firstName").length>1 && ck_name.test(this.get("firstName"))){
        this.$( ".invalidBorder1" ).css("border-color","green");
      }

      if(!this.get("lastName") || !ck_name.test(this.get("lastName"))){
        this.$( ".invalidBorder2" ).css("border-color","red");
      }
      else if(this.get("lastName").length>1 && ck_name.test(this.get("lastName"))){
        this.$( ".invalidBorder2" ).css("border-color","green");
      }

      if(!this.get("streetName") || !ck_name.test(this.get("streetName"))){  
        this.$( ".invalidBorder3" ).css("border-color","red");
      }
      else if(this.get("streetName").length>1 && ck_name.test(this.get("streetName"))){
        this.$( ".invalidBorder3" ).css("border-color","green");
      }
       
      if(!this.get("tel") || !ck_tel.test(this.get("tel"))){ 
        this.$( ".invalidBorder4" ).css("border-color","red");
      }
      else if(this.get("tel").length>5 && ck_tel.test(this.get("tel"))){
        this.$( ".invalidBorder4" ).css("border-color","green");
      }
               
      if(!this.get("country") || !ck_name.test(this.get("country"))){ 
        this.$( ".invalidBorder5" ).css("border-color","red");
      }
      else if(this.get("country").length>1 && ck_name.test(this.get("country"))){
        this.$( ".invalidBorder5" ).css("border-color","green");
      }
                   
      if(!this.get("city") || !ck_name.test(this.get("city"))){ 
        this.$( ".invalidBorder6" ).css("border-color","red");
      }
      else if(this.get("city").length>1 && ck_name.test(this.get("city"))){
        this.$( ".invalidBorder6" ).css("border-color","green");
      }
       
      if(!this.get("pwdReg") || !ck_pass.test(this.get("pwdReg"))){ 
        this.$( ".invalidBorder8" ).css("border-color","red");
        this.$( "#passParagraph" ).html("Password must contain at least 6 characters!");
       }
      else if(this.get("pwdReg").length>5 && ck_pass.test(this.get("pwdReg"))){
        this.$( ".invalidBorder8" ).css("border-color","green");
        this.$( "#passParagraph" ).html("");
       }

      if(!this.get("pwdConfirmation") || !ck_pass.test(this.get("pwdConfirmation")) || this.get("pwdConfirmation")!=this.get("pwdReg") ){ 
        this.$( ".invalidBorder7" ).css("border-color","red");
        this.$( "#confParagraph" ).html("Password did not match!");
       }
      else if(this.get("pwdConfirmation").length>5 && ck_pass.test(this.get("pwdConfirmation")) && this.get("pwdConfirmation")==this.get("pwdReg")){
        this.$( ".invalidBorder7" ).css("border-color","green");
        this.$( "#confParagraph" ).html("");
      }
        
      if(!this.get("emailReg") || !ck_email.test(this.get("emailReg"))){ 
        this.$( ".invalidBorder9" ).css("border-color","red");
      }
      else if(this.get("emailReg") && ck_email.test(this.get("emailReg"))){
        this.$( ".invalidBorder9" ).css("border-color","green");
      }
      
      if (ck_email.test(this.get("emailReg")) && ck_pass.test(this.get("pwdReg")) && ck_pass.test(this.get("pwdConfirmation")) 
        && ck_name.test(this.get("firstName")) && ck_name.test(this.get("lastName")) && ck_name.test(this.get("city")) 
        && ck_name.test(this.get("country")) && ck_name.test(this.get("streetName")) && ck_tel.test(this.get("tel")) 
        && this.get("firstName") && this.get("lastName") 
        && this.get("streetName") &&this.get("country") && this.get("city")&& this.get("pwdConfirmation") 
        && this.get("pwdReg") && this.get("emailReg")) 
      
     {  
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
  
    }

    },
     



   


 
    
  }
    
  
});
