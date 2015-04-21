'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.directive('myDirective', function() {
  return {
    restrict: 'ECMA', // element (E), class (C), attribute (A), comment (M)
    replace: true, // replace directive with what is in the template
    template: '<a href="http://google.com">Click me to go to Google</a>'
  };
});
