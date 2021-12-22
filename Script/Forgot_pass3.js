function checkpass(){
    let npass = document.getElementById("form-reset").value;
    let conf = document.getElementById("form-confirm").value;
    if(npass!=conf){
        alert("Mật khẩu không khớp")
    }
    else{
        alert("Thành công")
        location.replace("Login.html")
    }
}