'use strickt';

require('angular/angular');

var app = angular.module('myApp', []);

app.controller('MyController',
  ['$scope', '$interpolate', function($scope, $interpolate) {
    $scope.to = 'ari@fullstack.io';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';

    // Set up a watch
    $scope.$watch('emailBody', function(body) {
      if (body) {
        var template = $interpolate(body);
        $scope.previewText = template({to: $scope.to});
      }
    });
  }]);

/**
 * This is how the book does it.
 */
// angular.module('myApp', [])
//   .controller('MyController',
//     function($scope, $interpolate) {
//       $scope.to = 'ari@fullstack.io';
//       $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
//       // Set up a watch
//       $scope.$watch('emailBody', function(body) {
//         if (body) {
//           var template = $interpolate(body);
//           $scope.previewText =
//             template({to: $scope.to});
//         }
//       });
//     });
