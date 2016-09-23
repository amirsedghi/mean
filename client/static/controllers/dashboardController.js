app.controller('dashboardController', ['$scope','dashboardFactory','$location','$routeParams', function($scope, dashboardFactory, $location, $routeParams){

  $scope.getUser = function(){
    dashboardFactory.getUser(function(user){
      $scope.user = user
    })
  }

  $scope.getQuestions = function(){
    dashboardFactory.getQuestions(function(res){
      $scope.questions = res
    })
  }
  $scope.getUser()
  $scope.getQuestions()

}])
