'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('LotteryController', ['$scope', function($scope) {
  $scope.generateNumber = function() {
    return Math.floor((Math.random() * 10) + 1);
  };
}]);
