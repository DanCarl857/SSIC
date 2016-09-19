'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('sideNavCtrl', ['$scope', '$state', 
		function($scope, $state){
		
		$scope.navigateTo = function(view){
			$state.transitionTo(view);
		}
	}]);