'use strict';

angular.module('MoviesApp')
.controller("moviesCtrl", function ($scope, MoviesService, $location) {
    // Change initialMoviesCount to the number of movies you want loaded initially
    var initialMoviesCount = 10;
    var loaded = 0;
    var page = 0;
    // Change pageSize to the number of movies you want to load on the next page
    var pageSize = 20;


    $scope.comparedMovies = [];
    $scope.toggleDetails = toggleDetails;
    $scope.loadMore = loadMore;
    $scope.compare = compare;
    $scope.reset = reset;

    initialize();

    function initialize(){
        var promiseMovies = MoviesService.loadMore(loaded, initialMoviesCount);

        promiseMovies.then(function(data){
            $scope.movies = data;
            loaded = data.length;
            page++;
        });

    }

    function toggleDetails(movie){
        if(movie.Details.isHidden){
            // The details are not loaded, therefore load them and show the container
            MoviesService.showMovieDetails(movie);
        }
        else{
            // The details are already loaded, therefore reset the Details Object and hide the container
            MoviesService.hideMovieDetails(movie);
        }
    }

    function loadMore(){
        var count = page*pageSize + initialMoviesCount;
        var promiseMore = MoviesService.loadMore(loaded, count);

        promiseMore.then(function(data){
            angular.forEach(data, function(movie){
                $scope.movies.push(movie);
            });

            loaded += pageSize;
            page++;
        });
    }

    function compare() {
        angular.forEach($scope.comparedMovies, function (movie) {
            MoviesService.hideMovieDetails(movie);
        });

        $scope.comparedMovies.splice(0, $scope.comparedMovies.length);

        angular.forEach($scope.movies, function (movie) {
            if (movie["checked"]) {
                $scope.comparedMovies.push(movie);
                MoviesService.showMovieDetails(movie);
            }
        });

        $location.path('/compared');
    }

    function reset(){
        angular.forEach($scope.comparedMovies, function (movie) {
            MoviesService.hideMovieDetails(movie);

            if (movie["checked"]) {
                movie.checked = false;
            }
        });
        $scope.comparedMovies.splice(0, $scope.comparedMovies.length);
    }
});
