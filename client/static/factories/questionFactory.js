app.factory('questionFactory', ['$http','$location', function($http, $location) {
  var factory = {};

  factory.add = function(data, callback){
    $http({
      method: 'POST',
      url: '/addQuestion',
      data: data
    }).then(function(){
      callback()
    }, function(){
      console.log('was not able to add the question');
    })
  }

  factory.getQuestion = function(id, callback){
    $http({
      method: 'GET',
      url: '/getQuestion/'+ id
    }).then(function(res){
      callback(res.data)
    }, function(){
      console.log('was not able to get the question dude...');
    })
  }

  return factory;

}]);
