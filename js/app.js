/*global angular*/

var app = angular.module('IdealJobs', ['IdealJobCtrls', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        .state('zillow', {
            url: '/zillow',
            templateUrl: 'views/zillow.html'
        })
        .state('rover', {
            url: '/rover',
            templateUrl: 'views/rover.html'
        })
        .state('23andme', {
            url: '/23andme',
            templateUrl: 'views/23andme.html'
        });
}]);
