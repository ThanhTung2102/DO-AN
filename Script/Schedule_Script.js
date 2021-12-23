let schedule=angular.module("ScheduleApp",[])
schedule.controller("DoctorController",($scope,$http)=>{
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


schedule.controller("UserController",($scope,$http)=>{
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

function show2() {
    let t2 = document.getElementById("book_time2");
    let t2Hour = t2.value.substr(0, 2);
    let t2Minute = t2.value.substr(3, 2);
    if (t2Hour < t2.min) {
        alert("Earliest time is " + t2.min );
        t2.value = t2.min;
    } else if (t2Hour > t2.max){
        alert("Latest time is " + t2.max);
        t2.value = t2.max;
    } else {
        console.log(t2.value);
    }
}
