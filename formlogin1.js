let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("emailHelp");
let pd = document.getElementById("exampleInputPassword1");
let errorpd = document.getElementById("pdhelp");

function validate(){
    
    if(email.value.trim()==""){

        error.innerHTML = "Fields cannot be empty!";
        return false;
    }
    if(pd.value.trim()==""){
        errorpd.innerHTML = "Fields cannot be empty!";
        return false;
    }

}
function emailvalidate(){
    //var regx = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    //var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
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

function pwd(){
    
    if(pd.value.length == 0){
        errorpd.innerHTML = 'Enter Your Password!';
        errorpd.style.color= "red";
        return false;
    }
    else if(pd.value.length < 8){
        errorpd.innerHTML = 'Enter Your Correct Password!';
        errorpd.style.color= "red";
        return false;
    }
    else{
        errorpd.innerHTML = "Password: Valid";
        errorpd.style.color= "green";
        return true;
    }
}
