'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('SomeController', ['$scope', function($scope) {

  // create a model
  $scope.someModel = {
    // with a property
    someProperty: 'wow sutch property'
  };

  //set actions on $scope itself
  $scope.someAction = function() {
    $scope.someModel.someProperty = 'wow sutch response';
  };
}]);
