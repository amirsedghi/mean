app.controller('showQuestionController', ['$scope','questionFactory', 'answerFactory', 'userFactory', '$location','$routeParams', function($scope, questionFactory, answerFactory, userFactory, $location, $routeParams){

  $scope.getQuestion = function(){
    console.log('ok it get here at least');
    questionFactory.getQuestion($routeParams.id, function(data){
      $scope.question = data
      console.log('HERE IS THE QUESTION');
      console.log($scope.question);
    })
  }

  $scope.like = function(id){
    answerFactory.like(id, function(){
      $scope.getQuestion()
    })
  }


  $scope.getUser = function(){
    userFactory.getUser(function(user){
      $scope.user = user
    })
  }

  $scope.getUser()

  $scope.getQuestion()

}])
