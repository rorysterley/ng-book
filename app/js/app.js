'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.run(function($rootScope, $timeout) {
  $timeout(function() {
    $rootScope.myHref = 'http://google.com';
  }, 2000);
});
