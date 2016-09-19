'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('adminLoginCtrl', ['$scope','$state',
	 	function($scope, $state){
			$scope.navigateTo = function(view){
				$state.transitionTo(view);
			}
	}]);