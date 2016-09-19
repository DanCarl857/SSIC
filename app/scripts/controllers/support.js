'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('supportCtrl', [function(){

		$(document).ready(function(){
           $('.slider').slider({full_width: true});
        });

	}]);