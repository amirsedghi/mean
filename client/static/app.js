var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push(
        function($q, $location) {
        return {
            'responseError':function(rejection){
            if (rejection.status == 401){
                $location.url('/');
            }
            return $q.reject(rejection);
        }
        };
    });
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'userController'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/addQuestion', {
    templateUrl: 'partials/addQuestion.html',
    controller: 'questionController'
  })
  .when('/question/:id', {
    templateUrl: 'partials/showQuestion.html',
    controller: 'showQuestionController'
  })
  .when('/answer/:id', {
    templateUrl: 'partials/answer.html',
    controller: 'answerController'
  })
  .otherwise({
    redirectTo: '/dashboard'
  })
})
