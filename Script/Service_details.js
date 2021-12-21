let service=angular.module("ServiceApp",[])
service.controller("ServiceController",($scope,$http)=>{
    $http({
        method:"GET",
        url:"../Jason/Services-list.json"
    }).then (
        function success (response){
         $scope.serviceList=response.data;
         $scope.default=$scope.serviceList[0].List;
        },  
        function fail (response){
            console.log("heelo")
        }

    );
    $scope.selectServices= function (productObject){
        $scope.ServiceDetail=productObject; 
    }
    
})