'use strict';

/**
 * @ngdoc function
 * @name ZD:app.js
 * @description
 * # app.js
 */

// angular.module("MoviesApp", ["ngRoute"])
//     .config(function ($routeProvider) {
//         $routeProvider
//             .when('/',{
//                 templateUrl:'partials/Movies.html'
//                 //controller:'moviesCtrl'
//             })
//             .when('/compared',{
//                 templateUrl:'partials/ComparedMovies.html'
//                 //controller:'moviesCtrl'
//             })

//     })


    
    // .controller("moviesCtrl", function ($scope, MoviesService,$location) {
    //     var promise = MoviesService.getPlayers();
    //     $scope.ComparedMovies = [];
    //     promise.then(function (data) {
    //         //console.log(JSON.stringify(data));
    //         $scope.movies = data.data;
    //         console.log(JSON.stringify($scope.movies)+"before add");
    //         angular.forEach($scope.movies, function (data) {
    //             data["checked"] = false;

    //         });

    //     });
    //     $scope.hiddenDiv = true;
    //     $scope.GoNextPage = function () {
    //         angular.forEach($scope.movies, function (data) {
    //             if (data["checked"]) {
    //                 $scope.ComparedMovies.push(data);
    //             }

    //         });
    //         console.log(JSON.stringify($scope.ComparedMovies) + "before add");
    //         //console.log($scope.ComparedMovies+"before add");
    //         $location.path('/compared');

    //     }
    // })