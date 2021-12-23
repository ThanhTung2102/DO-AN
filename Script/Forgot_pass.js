function validateForm()
{
    var username = document.getElementById('emphone').value;
    var a = username.indexOf("@");
    var cham = username.indexOf(".");
    var kt = isNaN(username);
    if(kt==true){
        if (username == ''){
        alert('Bạn chưa nhập tên đăng nhập');
        }
        else if(cham<1 ||  a<1 ){
            alert("Đăng nhập không hợp lệ")
        }
        else if (username[0]=='.' || username[0]=='@'){
                alert('Mail không hợp lệ')
            }
        for(let i =1; i<username.length;i++){
            if(username[i]=='@'&& username[i+1]=='@'){
                alert('Mail không hợp lệ')
            }
            else if(username[i]=='.'&&username[i+1]=='.'){
                alert('Mail không hợp lệ')
            }
            else if(username[username.length-1]=='.' || username[username.    length-1]=='@'){
                alert('Mail không hợp lệ')
            }
        } 
        return;
    }
    else{
        for(let i =1; i< username.length;i++){
            if(username[0]!=0){
                alert('Phone không hợp lệ')
                break;
            }
        }
    }
}
function checkAcc(){
            let u = document.getElementById("emphone").value;
            fetch("../Jason/Account.json")
            .then(function(response){
                if(!response.ok){
                    throw new Error("HTTP error, status:" + response.status)
                }
                return response.json();
            })
            .then(function (check){
                for(p of check.account){
                    if(p.UserName==u )
                    {
                        alert("thành công")
                        location.replace("Forgot_password_2.html")
                        return ;
                    }
                }
                alert("thất bại")
            })
            .catch(function(error){
                alert(error)
            })
}
function goi(){
    validateForm();
    checkAcc();
}
function verifyCode(){
    let code = document.getElementById("verify-codemail").value;
    if(code=="1111"){
        alert("Thành công")
        location.replace("Forgot_password_3.html")
    }
    else{
        alert("Code không hợp lệ");
    }
}
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