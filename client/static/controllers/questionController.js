app.controller('questionController', ['$scope','questionFactory', 'userFactory', '$location','$routeParams', function($scope, questionFactory, userFactory, $location, $routeParams){

  $scope.add = function(data){
    questionFactory.add(data, function(){
      console.log('just added a question!');
      $location.url('/dashboard')
    })
  }

  $scope.getUser = function(){
    dashboardFactory.getUser(function(user){
      $scope.user = user
    })
  }


}])
