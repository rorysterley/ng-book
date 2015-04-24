'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.run(function($rootScope, $timeout) {
  $rootScope.isDisabled = true;
  $timeout(function() {
    $rootScope.isDisabled = false;
  }, 5000);
});
