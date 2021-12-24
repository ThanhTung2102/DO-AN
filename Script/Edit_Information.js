var urlparams = new URLSearchParams(location.search);
        var id = urlparams.get("userID");
        function close(){
            location.href="Homepage.html";
        }
   

let app= angular.module("angularApp",[]);
app.controller("inforController", function($scope, $http){
    $http({
    method:"GET",
    url:"../Jason/User_Account.json"
    }).then(function success(response){
    $scope.patientInfor=response.data.find(value=>value.userID==id);
    },
    function error(response){
    $scope.error=response.statusText;
    }
    )
})