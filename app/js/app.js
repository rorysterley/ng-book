'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.run(function($rootScope, $timeout) {
  $timeout(function() {
    $rootScope.imgSrc = 'http://google.com/images/srpr/logo11w.png';
  }, 2000);
});
