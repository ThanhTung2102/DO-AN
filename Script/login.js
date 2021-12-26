function validateForm()
{
    var username = document.getElementById('ephone').value;
    var password = document.getElementById('password').value;
    var a = username.indexOf("@");
    var cham = username.indexOf(".");
    var kt = isNaN(username);
    if(kt==true){
        if (username == ''){
        alert('Please enter your mail or phone number');
        }
        else if (password == '')
        {
            alert('Please enter your password');
        }
        else if(cham<1 ||  a<1 ){
            alert("Đăng nhập không hợp lệ")
        }
        else if (username[0]=='.' || username[0]=='@'){
                alert('Invalid mail account')
            }
        for(let i =1; i<username.length;i++){
            if(username[i]=='@'&& username[i+1]=='@'){
                alert('Invalid Mail account')
            }
            else if(username[i]=='.'&&username[i+1]=='.'){
                alert('Invalid Mail account')
            }
            else if(username[username.length-1]=='.' || username[username.    length-1]=='@'){
                alert('Invalid Mail account')
            }
        } 
    }
    else{
        for(let i =1; i< username.length;i++){
            if(username[0]!=0){
                alert('Invalid Phone number')
                break;
            }
        }
    }
}
        function login(){
            let u = document.getElementById("ephone").value;
            let w = document.getElementById("password").value;
            fetch("../Jason/Account.json")
            .then(function(response){
                if(!response.ok){
                    throw new Error("HTTP error, status:" + response.status)
                }
                return response.json();
            })
            .then(function (check){
                for(p of check.account){
                    if(p.UserName==u && p.Password==w )
                    {
                        alert("Log In Successfully")
                        location.replace("Homepage_User.html?userID="+p.userID)
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
            login();
        }
function register(){
    location.replace("Sign_Up.html")
}
function signIn(){
    location.replace("Login.html")
}