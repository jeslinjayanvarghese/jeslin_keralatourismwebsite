let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("emailHelp");
let pd = document.getElementById("exampleInputPassword1");
let errorpd = document.getElementById("pdhelp");

function validate(){
    let regx = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/

    if(email.value.length == 0){
        error.innerHTML = 'Type Email!';
        return false;
    }
    else if(email.value==""||pd.value==""){
        error.innerHTML = "Fields cannot be empty!";
        errorpd.innerHTML = "Fields cannot be empty!"
        return false;
    }
    else if(regx.test(email.value)){
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
    
    if(pd.value.length.trim() == 0){
        errorpd.innerHTML = 'Enter Your Password!';
        errorpd.style.color= "red";
        return false;
    }
    else if(pd.value.length.trim() <= 8){
        errorpd.innerHTML = 'Enter Your Correct Password!';
        errorpd.style.color= "red";
        return false;
    }
    else if(pd.value.trim() === ""){
        errorpd.innerHTML = 'Password cannot be empty!';
        errorpd.style.color= "red";
        return false;
    }
    else{
        errorpd.innerHTML = "Password: Valid";
        errorpd.style.color= "green";
        return true;
    }
}

