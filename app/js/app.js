'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('EquationController', function($scope) {
  $scope.equation = {};
  $scope.change = function() {
    $scope.equation.output = Number($scope.equation.x) + 2;
  };
});
