let doctor=angular.module("DoctorApp",[])
doctor.controller("DoctorController",($scope,$http)=>{
    $http({
        method:"GET",
        url:"../Jason/VIP.json"
    }).then (
        function success (response){
         $scope.doctors=response.data;
         $scope.chosenDoctor=$scope.doctors[0];
        },  
        function fail (response){

        }

    );
    
})