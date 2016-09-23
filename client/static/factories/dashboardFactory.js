app.factory('dashboardFactory', ['$http','$location', function($http, $location) {
  var factory = {};

  factory.getUser = function(callback){
    $http({
      method:"GET",
      url:'/getUser',
    }).then(function(res){
      callback(res.data)
    }, function(){
      console.log('Could not get the user');
    })
  }

  factory.getQuestions = function(callback){
    $http({
      method: 'GET',
      url: '/getQuestions'
    }).then(function(res){
      callback(res.data);
    }, function(){
      console.log('could not get the questions');
    })
  }

  return factory;

}]);
