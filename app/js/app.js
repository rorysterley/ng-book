'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.someProperty = 'hello computer';
  $rootScope.someAction = function() {
    $rootScope.someProperty = 'hello human';
  };
});
