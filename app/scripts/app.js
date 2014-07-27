'use strict';

angular.module('ruzbehkheirabiApp', [
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools',
  'ui.bootstrap'
]).config(function ($routeProvider, loginRedirectPath) {
  $routeProvider
    .when('/', {
      authRequired: false,
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
