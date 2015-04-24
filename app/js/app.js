'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('PeopleController', function($scope) {
  $scope.people = [
    {name: 'Ari', city: 'San Francisco'},
    {name: 'Erik', city: 'Seattle'}
  ];
});
