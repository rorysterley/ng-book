'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('SomeController', ['$scope', function($scope) {
  // anti-pattern, bare value
  $scope.someBareValue = 'hello computer';

  // set actions on $scope itself, this is okay
  $scope.someAction = function() {
    // sets {{ someBareValue }} inside SomeController and ChildController
    $scope.someBareValue = 'hello human, from parent';
  };
}]);

app.controller('ChildController', ['$scope', function($scope) {
  $scope.childAction = function() {
    // sets {{ someBareValue }} inside Childcontroller
    $scope.someBareValue = 'hello human, from child';
  };
}]);
