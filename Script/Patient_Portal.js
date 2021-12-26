function editInfor(){
    window.location.href="Edit_Information.html"
  }
   
    function saveNote(){
      
      if (localStorage) {
  	    // document.getElementById("btnSave").addEventListener('submit', function() {
  	      let notes = document.getElementById('valueNote').value;
  	      localStorage.setItem('name', notes);
  	  // })
    }
    };
  window.onload = function() {

    // Retrieve user name
    let note = localStorage.getItem('name');
    if (note != "undefined" && note != null) {
      document.getElementById('valueNote').value =  note;
    } else {
      document.getElementById('valueNote').value = note;
    }  
  };

var urlparams = new URLSearchParams(location.search);
      var id = urlparams.get("userID");
      function editForm(){
      location.href="Edit_Information.html?userID="+id
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

      app.controller("paymentController", function($scope, $http){
        $http({
          method:"GET",
          url:"../Jason/Payment.json"
        }).then(function success(response){
          $scope.payment=response.data.find(value=>value.userID==id);
        },
        function error(response){
          $scope.error=response.statusText;
        }
        )
      })
      app.controller("scheduleController", function($scope, $http){
        $http({
          method:"GET",
          url:"../Jason/Schedule.json"
        }).then(function success(response){
          $scope.schedule=response.data.find(value=>value.userID==id);
        },
        function error(response){
          $scope.error=response.statusText;
        }
        )
      })
      app.controller("eventController", function($scope, $http){
        $http({
          method:"GET",
          url:"../Jason/Event.json"
        }).then(function success(response){
          $scope.event=response.data;
        },
        function error(response){
          $scope.error=response.statusText;
        }
        )
      })
      app.controller("fileController", function($scope, $http){
        $http({
          method:"GET",
          url:"../Jason/Document_File.json"
        }).then(function success(response){
            $scope.file=response.data.find(value=>value.userID==id);
        },
        function error(response){
          $scope.error=response.statusText;
        }
        )
      })
      