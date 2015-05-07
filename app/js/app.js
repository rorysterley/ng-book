'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);
//jscs:disable
/* jshint ignore:start */
app.directive('sidebox', function() {
  return {
    restrict: 'EA',
    scope: {
      title: '@'
    },
    transclude: true,
    template: '\
      <div class="sidebox">\
        <div class="content">\
          <h2 class="header">{{ title }}</h2>\
          <span class="content" ng-transclude>\
          </span>\
        </div>\
      </div>'
  };
});
/* jshint ignore:end */
