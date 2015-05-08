'use strict';

require('angular/angular');
require('angular-route');

var myApp = angular.module('myApp', ['ngRoute']); // jshint ignore:line

// services

// controllers
require('./controllers/dashboardController.js')(myApp);
require('./controllers/inboxController.js')(myApp);

// directives

// config
myApp.config(['$routeProvider', function($routeProvider) {
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
    .when('/inbox/:name', {
      controller: 'InboxController',
      templateUrl: 'views/inbox.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
