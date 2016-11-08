'use strict';

/**
 * @ngdoc overview
 * @name abc360App
 * @description
 * # abc360App
 *
 * Main module of the application.
 */
angular
  .module('abc360App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
