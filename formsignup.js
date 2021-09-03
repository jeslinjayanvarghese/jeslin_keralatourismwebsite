var email = document.getElementById("inputEmail4");
var error = document.getElementById("emailHelp");
var password = document.getElementById("inputPassword4");
var phone = document.getElementById("inputAddress");
var address = document.getElementById("inputAddress2");
var city = document.getElementById("inputCity");
var state = document.getElementsByClassName("form-select");
var zip = document.getElementById("inputZip");
var btn = document.getElementById("regbtn");
btn.disabled = true;




function validate()
{
    if(validate1() && emailvalidate() && validatephone())
    {
      return true;  
    }
    else{
        return false;
    }
}

function validate1(){
    //var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;

    if(email.value.trim()==""){
        alert("Email Cannot be Empty!");
        return false;
    }
    if(password.value.trim()==""){
        alert("Password Cannot be Empty!");
        return false;
    }
    if(phone.value.trim()==""){
        alert("Phone Cannot be Empty!");
        return false;
    }
    if(address.value.trim()==""){
        alert("Address Cannot be Empty!");
        return false;
    }
    if(city.value.trim()==""){
        alert("City Cannot be Empty!");
        return false;
    }
    if(zip.value.trim()==""){
        alert("Zip Cannot be Empty!");
        return false;
    }
    if(isNaN(zip.value.trim())){
        alert("Zip should be a number!");
        return false;
    }
    
    
    
}
function emailvalidate(){
    var regx = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    //var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    if(regx.test(email.value.trim())){
        error.innerHTML = "Valid Email";
        error.style.color= "green";
        return true;
    }
    else{
        error.innerHTML = "Email: Invalid";
        error.style.color= "red";
        return false;
    }
}


function passwordChanged(password){
    var password_strength = document.getElementById("password-text");

    if (password.length == 0) {
        password_strength.innerHTML = "Enter Password";
        password_strength.style.color = "red";
        return false;
        
      }

      //Regular Expressions.
      var regex = new Array();
      regex.push("[A-Z]"); //Uppercase Alphabet.
      regex.push("[a-z]"); //Lowercase Alphabet.
      regex.push("[0-9]"); //Digit.
      regex.push("[$@$!%*#?&]"); //Special Character.

      var passed = 0;

      //Validate for each Regular Expression.
      for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
          passed++;
        }
      }

      //Display status.
      var strength = "";
      switch (passed) {
        case 0:
        case 1:
        case 2:
          strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
          btn.disabled = true;
          break;
        case 3:
          strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
          btn.disabled = true;
          break;
        case 4:
          strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
          btn.disabled = false;
          break;

      }
      password_strength.innerHTML = strength;
      return true;
    }





function validatephone(){

    let phone = document.getElementById("inputAddress");
    var regx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    
    if(regx.test(phone.value)){
        document.getElementById("error_msg").innerHTML="VALID";
        document.getElementById("error_msg").style.visibility="Visible";
        document.getElementById("error_msg").style.color="green";
        return true;
    }
    else{
        document.getElementById("error_msg").innerHTML="INVALID: Enter a 10 digit Phone number!";
        document.getElementById("error_msg").style.visibility="Visible";
        document.getElementById("error_msg").style.color="red";
        return false;
    }

    
    
}
