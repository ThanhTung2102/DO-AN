function validateEmail() {
    var email = document.getElementById('email');
    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/;
   
    if (email.value == "") {
        alert( "Please enter your Email or Phone Number  ");
    }
    else if (!mailFormat.test(email.value)) {
        alert( "Email Address is not valid, Please provide a valid Email or phone number ");
        return false;
    }
    else {

    }
}

function validatePhone(){
    var phoneNum=document.getElementById('phone');
    var phoneFormat= /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (phoneNum.value == "") {
        alert( "Please enter your Email or Phone Number");
    }
    else if (!phoneFormat.test(phoneNum.value)) {
        alert( "Phone number is not valid, Please provide a valid phone number ");
        return false;
    }
    else {
    }

}
function validateIdNumber(){
    var idNum=document.getElementById('idNum');
    var idFormat=/(([0-9]{9}) | ([0-9]{11})\b)/g;
    if (idNum.value == "") {
        alert( "Please enter your ID Number");
    }
    else if (!idFormat.test(idNum.value)) {
        alert( "ID Number is not valid, Please provide a valid ID Number");
        return false;
    }
    else {
    }
}
