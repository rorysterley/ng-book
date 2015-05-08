'use strict';

module.exports = function(app) {
  app.controller('DashboardController', ['$scope', 'todos',
    function($scope, todos) {
      $scope.dashboardModel = {
        todos: todos
      };
    }]);
};
