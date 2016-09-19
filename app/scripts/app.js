'use strict';

/**
 * @ngdoc overview
 * @name ssicRApp
 * @description
 * # ssicRApp
 *
 * Main module of the application.
 */
angular
  .module('ssicRApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('/', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('teachers', {
        url: '/teachers',
        templateUrl: 'views/teachers.html',
        controller: 'teachCtrl'
      })
      .state('students', {
        url: '/students', 
        templateUrl: 'views/students.html',
        controller: 'studentCtrl'
      })
      .state('campus', {
        url: '/campus',
        templateUrl: 'views/campus.html', 
        controller: 'campusCtrl'
      })
      .state('support', {
        url: '/support',
        templateUrl: 'views/support.html', 
        controller: 'supportCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      })
      .state('contact', {
        url: '/contact', 
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
	  
	  /* scm app routes */
	  .state('login', {
		  url: '/login',
		  templateUrl: 'views/scm_app/login.html'
	  })
	  .state('teachersHome', {
		  url: '/teacher',
		  templateUrl: 'views/scm_app/teachers/home.html'
	  })
    .state('academics', {
      url: '/academics',
      templateUrl: 'views/scp_app/academics.html'
    })
	  
	  /* partials for the scm app */
	  .state('messages', {
		  url: '/messages',
		  templateUrl: '/messages.htm',
		  controller: 'msgCtrl'
	  });
      
      $urlRouterProvider.otherwise('/home');
  });
