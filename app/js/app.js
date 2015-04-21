'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

// Note: The backend does not currently sport '/api/check/'
app.directive('ensureUnique', ['$http', function($http) {
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function(n) {
        if (!n) { return; }
        $http({
          method: 'POST',
          url: '/api/check/' + attrs.ensureUnique,
          data: {'field': attrs.ensureUnique}
        }).success(function(data) {
          c.$setValidity('unique', data.isUnique);
        }).error(function(data) {
          c.$setValidity('unique', false);
        });
      });
    }
  };
}]);

app.controller('signupController', ['$scope', function($scope) {
  $scope.submitted = false;
  $scope.signupForm = function() {
    if ($scope.signup_form.$valid) {
      // Submit as normal
    } else {
      $scope.signup_form.submitted = true;
    }
  };
}]);
