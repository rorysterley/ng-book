'use strickt';

require('angular/angular');
require('angular-route');

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardController',
      resolve: {
        'todos': ['$http', function($http) {
          return $http.get('/api/v1/todo')
            .then(
              function success(res) { return res.data; },
              function error(reason) { return false; }
            );
        }]
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('DashboardController', ['$scope', 'todos',
  function($scope, todos) {
    $scope.dashboardModel = {
      todos: todos
    };
  }]);
