function validateEmailandPhoneNum() {
    var email = document.getElementById('ephone');
    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|((09|03|07|08|05)+([0-9]{8})\b)+$/;
    if (email.value == "") {
        alert( "Please enter your Email or Phone Number  ");
    }
    else if (!mailFormat.test(email.value)) {
        alert( "Email Address / Phone number is not valid, Please provide a valid Email or phone number ");
        return false;
    }
    else {
        alert(" Success ");
    }
}