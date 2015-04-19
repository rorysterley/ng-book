'use strickt';

require('angular/angular');

var app = angular.module('app', []);

app.controller('FirstController', function($scope) {
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.subtract = function(amount) { $scope.counter -= amount; };
});

app.controller('MyController', function($scope) {
  $scope.person = {
    name: 'El estudiante muy mal!'
  };
});
