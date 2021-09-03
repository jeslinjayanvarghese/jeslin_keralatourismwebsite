var email = document.getElementById("inputEmail4");
var error = document.getElementById("emailHelp");
var password = document.getElementById("inputPassword4");
var password1 = document.getElementById("inputcpd");
var phone = document.getElementById("inputAddress");
var address = document.getElementById("inputAddress2");
var city = document.getElementById("inputCity");
var state = document.getElementsByClassName("form-select");
var zip = document.getElementById("inputZip");
var btn = document.getElementById("regbtn");
var strength = document.getElementById('StrengthDisp');
//var pdnomatch = document.getElementById("password-text");
btn.disabled = true;

// function validate()
// {
//     if(validate1() && emailvalidate() && validatephone() && pdcheck())
//     {
//       return true;  
//     }
//     else{
//         return false;
//     }
// }

function validate(){
    
    if(email.value.trim()==""){
        alert("Email Cannot be Empty!");
        return false;
    }
    if(password.value.trim()==""){
        alert("Password Cannot be Empty!");
        return false;
    }
    if(password1.value.trim()==""){
        alert("Confirm Password Cannot be Empty!");
        return false;
    }
    if(phone.value.trim()==""){
        alert("Phone Cannot be Empty!");
        return false;
    }
    if(isNaN(phone.value.trim())){
            alert("Phone should be a number!");
            return false;
    }
    // if(address.value.trim()==""){
    //     alert("Address Cannot be Empty!");
    //     return false;
    // }
    // if(city.value.trim()==""){
    //     alert("City Cannot be Empty!");
    //     return false;
    // }
    // if(state.value==""){
    //     alert("State Cannot be Empty!");
    //     return false;
    // }
    // if(zip.value.trim()==""){
    //     alert("Zip Cannot be Empty!");
    //     return false;
    // }
    // 
    
}
    
    

function emailvalidate(){
    //var regx = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    // var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    //var regx = /^([^./-][A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    var regx = /^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;
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


function passwordChanged(){
    
    
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{5,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{2,}).*", "g");

    //var strongRegex = /(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})/;

    //var mediumRegex = /((?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{2,}))|((?=.[a-z])(?=.[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
    var password = document.getElementById("inputPassword4");
    
    if(password.value.length == 0) {
        strength.innerHTML = 'Type Password!';
        strength.style.color = "red";
        btn.disabled = true;
        return false;
    } else if (false == enoughRegex.test(password.value)) {
        strength.innerHTML = 'More Characters';
        //alert("Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"); 
        btn.disabled = true;
        return false;
    } else if (strongRegex.test(password.value)) {
        strength.innerHTML = '<span style="color:white">Strong Password!</span>';
        strength.style.backgroundColor = "green";
        btn.disabled = false;
        return true;
    } else if (mediumRegex.test(password.value)) {
        strength.innerHTML = '<span style="color:white">Medium Password!</span>';
        strength.style.backgroundColor = "orange";
        btn.disabled = true;
        return false;
    } else {
        strength.innerHTML = '<span style="color:white">Weak Password!</span>';
        strength.style.backgroundColor = "red";
        btn.disabled = true;
        return false;
    }
}


function pass2() {
    var cpd = document.getElementById("cpdhelp");
    if (password.value.trim() != password1.value.trim()) {
        cpd.innerHTML ="Password Not Matched!";
        cpd.style.color = "red";
        btn.disabled = true;
        return false;

    } else {
        cpd.innerHTML ="Password Matched!";
        cpd.style.color = "green";
        btn.disabled = false;
        return true;
    }
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
        document.getElementById("error_msg").innerHTML="Enter a 10 digit Phone number!<br><style='color:white'>Format should be either 000-000-0000 or 000.000.0000 or 000 000 0000";
        document.getElementById("error_msg").style.visibility="Visible";
        document.getElementById("error_msg").style.color="red";
        return false;
    }
}
    

    
    

