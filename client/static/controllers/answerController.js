app.controller('answerController', ['$scope','answerFactory', 'questionFactory', '$location','$routeParams', function($scope, answerFactory, questionFactory, $location, $routeParams){

  $scope.id = $routeParams.id

  $scope.getQuestion = function(){
    console.log('ok it get here at least');
    questionFactory.getQuestion($routeParams.id, function(data){
      $scope.question = data
      console.log('HERE IS THE QUESTION');
      console.log($scope.question);
    })
  }

  $scope.getQuestion()

  $scope.add = function(data){
    answerFactory.add(data, $scope.question._id, function(){
      console.log('just added the answer!');
      $location.url('/dashboard')
    })
  }

  $scope.getUser = function(){
    dashboardFactory.getUser(function(user){
      $scope.user = user
    })
  }


}])
