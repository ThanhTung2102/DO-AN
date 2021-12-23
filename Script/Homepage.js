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
