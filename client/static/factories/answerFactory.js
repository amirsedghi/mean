app.factory('answerFactory', ['$http','$location', function($http, $location) {
  var factory = {};

  factory.add = function(data, id, callback){
    $http({
      method: 'POST',
      url: '/addAnswer/'+ id,
      data: data
    }).then(function(){
      console.log('just added the answer');
      callback()
    }, function(){
      console.log('could not add the answer to the question');
    })
  }

  factory.like = function(id, callback){
    $http({
      method: 'GET',
      url: '/like/'+id,
    }).then(function(){
      callback()
    }, function(){
      console.log('sorry buddy could not increment');
    })
  }

  return factory;

}]);
