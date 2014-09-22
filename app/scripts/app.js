'use strict';

/**
 * @ngdoc overview
 * @name iscaNgApp
 * @description
 * # iscaNgApp
 *
 * Main module of the application.
 */
angular
  .module('iscaNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/quien', {
        templateUrl: 'views/who.html',
        controller: 'AboutCtrl'
      })
      .when('/que', {
        templateUrl: 'views/what.html',
        controller: 'AboutCtrl'
      })
      .when('/emdr', {
        templateUrl: 'views/emdr.html',
        controller: 'AboutCtrl'
      })
      .when('/sensoriomotora', {
        templateUrl: 'views/sensoriomotora.html',
        controller: 'AboutCtrl'
      })
      .when('/neurofeedback', {
        templateUrl: 'views/neurofeedback.html',
        controller: 'AboutCtrl'
      })
      .when('/biofeedback', {
        templateUrl: 'views/biofeedback.html',
        controller: 'AboutCtrl'
      })
      .when('/donde', {
        templateUrl: 'views/where.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);

  }]);

