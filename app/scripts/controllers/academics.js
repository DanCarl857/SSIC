'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('academicsCtrl', [function(){

		$(document).ready(function(){
           $('.slider').slider({
           	full_width: true,
           	indicators: false
           });
        });

	}]);