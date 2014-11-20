'use strict';

/**
 * @ngdoc overview
 * @name angularRoiCalcApp
 * @description
 * # angularRoiCalcApp
 *
 * Main module of the application.
 */
angular
  .module('angularRoiCalcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('questions', {
      url: '/',
      templateUrl: 'views/questions.html',
      controller: 'QuestionsCtrl'
    })
    .state('charts', {
      url: '/charts',
      templateUrl: 'views/charts.html',
      controller: 'ChartsCtrl'
    })
  });
