'use strict';

/**
 * @ngdoc function
 * @name reverseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reverseApp
 */
angular.module('reverseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
