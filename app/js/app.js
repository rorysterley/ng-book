'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.directive('myDirective', function() {
  return {
    restrict: 'A', // (A) attribute style is standard for custom elements
    replace: true, // replace directive with what is in the template
    scope: {
      myUrl: '@someAttr', // binding strategy: Now we use 'some-attr' in html
      myLinkText: '@' // binding strategy
    },
    template: '<a href="{{ myUrl }}">{{ myLinkText }}</a>'
  };
});
