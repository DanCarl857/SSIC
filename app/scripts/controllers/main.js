'use strict';
/*global $ */

angular.module('ssicRApp')
  .controller('MainCtrl', [
	function () {
		$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }]);
