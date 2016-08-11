'use strict';
/**
 * @ngdoc function
 * @name ZD:routes.js
 * @description
 * # routes.js is used to configer the routes of the application.
 */

angular.module("MoviesApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'partials/Movies.html'
                //controller:'moviesCtrl'
            })
            .when('/compared',{
                templateUrl:'partials/ComparedMovies.html'
                //controller:'moviesCtrl'
            })

    })
