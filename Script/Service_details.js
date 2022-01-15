var slideIndex =1 ;
showSlides(slideIndex);

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
  };
  


let service=angular.module("ServiceApp",[])
    service.controller("ServiceController",($scope,$http)=>{
          $http({
              method:"GET",
              url:"../Jason/Services_List.json"
          }).then (
              function success (response){
               $scope.serviceList=response.data;
               
              },  
              function fail (response){
                $scope.error=response.statusText;
              }
      
          );
         $scope.currentSlideByAn=  function(n) {
            showSlides(slideIndex = n+1);
          }
         
        
      });

      service.controller("ServiceDetailController",($scope,$http)=>{
          $http({
              method:"GET",
              url:"../Jason/Services_List.json"
          }).then(
              function success (response){
                      $scope.selectedDepart=response.data.find(
                        value=> value.DepartId==id
                      )
              },
              function failed (response){
                  $scope.error=response.statusText;
              }
          )
          $scope.currentSlideByAn= function(n) {
            showSlides(slideIndex = n+1);
          }

      })