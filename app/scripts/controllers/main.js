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

      $scope.master = {};

      $scope.reset = function() {
        $scope.input = angular.copy($scope.master);
      };

      $scope.reset();

		$scope.countOf = function(text) {
			var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
			return s ? s.length : '';
		};

		// reverses the text
		$scope.reverseText = function(text) {
			var result = '';
			text = text || '';
			for (var i=0; i<text.length; i++) {
				result = text.charAt(i) + result;
			}
			return result;
		};
  });
