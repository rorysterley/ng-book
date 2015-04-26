'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('FormController', ['$scope', function($scope) {
  $scope.fields = [
    {placeholder: 'Username', isRequired: true},
    {placeholder: 'Password', isRequired: true},
    {placeholder: 'Email (optional)', isRequired: false}
  ];

  $scope.submitForm = function() {
    alert('it works!');
  };
}]);
