'use strict';

var app = angular.module('angularFoursquareApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/explore', {
		controller: 'placesExplorerController',
		templateUrl: 'views/placesresults.html'
	})
	.otherwise({
		redirectTo: '/explore'
	});
});