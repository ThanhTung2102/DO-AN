function validateForm()
{
    var username = document.getElementById('ephone').value;
    var password = document.getElementById('password').value;
    var a = username.indexOf("@");
    var cham = username.indexOf(".");
    var kt = isNaN(username);
    if(kt==true){
        if (username == ''){
        alert('Bạn chưa nhập tên đăng nhập');
        }
        else if (password == '')
        {
            alert('Bạn chưa nhập mật khẩu');
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
                        alert("thành công")
                        location.replace("Homepage_User.html")
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