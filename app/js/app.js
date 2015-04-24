'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('SomeController', ['$scope', function($scope) {
  // best practice, always use a model
  $scope.someModel = {
    someValue: 'hello computer'
  };
  $scope.someAction = function() {
    $scope.someModel.someValue = 'hello human, from parent';
  };
}]);

app.controller('ChildController', ['$scope', function($scope) {
  $scope.childAction = function() {
    $scope.someModel.someValue = 'hello human, from child';
  };
}]);
