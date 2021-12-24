var urlparams = new URLSearchParams(location.search);
        var id = urlparams.get("userID");

        let app= angular.module("angularApp",[]);
      app.controller("yearController", function($scope, $http){
        $http({
          method:"GET",
          url:"../Jason/Medical_Record.json"
        }).then(function success(response){
            $scope.patientRecord=response.data.find(value=>value.userID==id);
          } 
        ,
        function error(response){
          $scope.error=response.statusText;
        }
        )
        $scope.selectYear=function(year){
            $scope.prYear=year;
        }
        $scope.selectDetail=function(detail){
            $scope.prDetail=detail;
        }
      })
      app.controller("diagnoseController", function($scope, $http){
        $http({
          method:"GET",
          url:"../Jason/Health_Diagnose.json"
        }).then(function success(response){
          $scope.healthDiagnose=response.data.find(value=>value.userID==id);
          console.log("Hello"+$scope.healthDiagnose.checkResults)
          } 
          
        ,
        function error(response){
          $scope.error=response.statusText;
        }
        )
      })