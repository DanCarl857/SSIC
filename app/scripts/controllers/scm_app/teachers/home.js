'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('homeCtrl', ['$scope', '$state', 
		function($scope, $state){
		$(document).ready(function(){
			$('.collapsible').collapsible({
				accordion: true
			});
		});
		
		$scope.navigateTo = function(view){
			$state.transitionTo(view);
		}
	}])
	.controller('msgCtrl', [function(){
		$(document). ready(function(){
			$('.tooltipped').tooltip({delay: 50});
		})
	}]);