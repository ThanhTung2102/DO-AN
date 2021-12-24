let doctor=angular.module("DoctorApp",[])
doctor.controller("DoctorController",($scope,$http)=>{
    $http({
        method:"GET",
        url:"../Jason/Doctor_Schedule.json"
    }).then (
        function success (response){
         $scope.doctors=response.data;
         $scope.chosenDoctor=$scope.doctors[0];
        },  
        function fail (response){
        }
    );
    
})


let user=angular.module("UserApp",[])
user.controller("UserController",($scope,$http)=>{
    $http({
        method:"GET",
        url:"../Jason/User_Account.json"
    }).then (
        function success (response){
         $scope.users=response.data.find(value=>value.userID==id);
            console.log($scope.users)
        },  
        function fail (response){
        }
    );
    
})