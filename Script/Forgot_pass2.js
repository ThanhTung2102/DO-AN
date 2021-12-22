function verifyCode(){
    let code = document.getElementById("verify-codemail").value;
    if(code!="1111"){
        alert("Không đúng code")
    }
    else{
        alert("thành công");
       window.location= "../Forgot_password_3.html"
    }
}