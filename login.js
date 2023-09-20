//console.log(res);

function registerValidation(){

    const fullName = document.forms["signup"]["fname"].value;

    if(fullName == ''){
        document.getElementById("fullNameError").innerHTML = "Please Enter Full Name";
        return false
    }

    const emailId = document.forms["signup"]["email"].value;

    if(emailId == ''){
        document.getElementById("emailError").innerHTML = "Please Enter Valid Email Id";
        return false
    }

    const passWord = document.forms["signup"]["password"].value;

    if(passWord == ''){
        document.getElementById("passwordError").innerHTML = "Please Enter Valid Password";
        return false
    }

    const phone = document.forms["signup"]["phone"].value;

    if(isNaN(phone)){
        document.getElementById("phoneError").innerHTML = "Please Enter Valid Phone Number";
        return false
    }
}