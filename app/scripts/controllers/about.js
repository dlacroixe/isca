'use strict';

/**
 * @ngdoc function
 * @name iscaNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iscaNgApp
 */
angular.module('iscaNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
