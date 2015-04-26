'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('CounterController', ['$scope', function($scope) {
  $scope.decrement = function() {
    $scope.count = $scope.count - 1;
  };
}]);
