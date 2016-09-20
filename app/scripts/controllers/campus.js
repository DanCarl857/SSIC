'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('campusCtrl', [function(){

		$(document).ready(function(){
           $('.slider').slider({full_width: true});
        });

	}]);