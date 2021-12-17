function validateIdentificationCard() {
    var IDcard = document.getElementById('ephone');
    var IDcardFormat = /((0)+([0-9]{11})\b)/g;
    if (IDcard.value == "") {
        alert( "Please enter your Email or Phone Number  ");
    }
    else if (!IDcardFormat.test(IDcard.value)) {
        alert( "Your ID card number is invalid");
        return false;
    }
    else {
        alert(" Success ");
    }
}