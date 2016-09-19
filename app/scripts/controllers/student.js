'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('studentCtrl', [function(){

		$(document).ready(function(){
           $('.slider').slider({full_width: true});
        });

	}]);