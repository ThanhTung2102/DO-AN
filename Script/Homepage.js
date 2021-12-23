let news=angular.module("NewsApp",[])
news.controller("NewsController",($scope,$http)=>{
    $http({
        method:"GET",
        url:"../Jason/News.json"
    }).then (
        function success (response){
         $scope.newsList=response.data;
        },  
        function fail (response){

        }

    );
    
})
var urlParams=new URLSearchParams(location.search);
var id=urlParams.get("userID");
function patientPortal(){
    location.href="Patient_Portal.html?userID="+id
}
function medicalRecord(){
    location.href="Patient_Record.html?userID="+id
}
function virtualSchedule(){
    location.href="Schedule_Virtual.html?userID="+id
}
function homecareSchedule(){
    location.href="Schedule_Homecare.html?userID="+id
}
function basicSchedule(){
    location.href="Schedule_Basic.html?userID="+id
}