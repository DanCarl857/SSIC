'use strict';
/*global $ */

angular.module('ssicRApp')
	.controller('AboutCtrl', [function(){

		$(document).ready(function(){
           $('.slider').slider({full_width: true});
        });

	}]);