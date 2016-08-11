'use strict';

/**
 * @ngdoc function
 * @name ZD:apiFactory
 * @description
 * # apiFactory
 * Factory that will serve as the point of contact for
 * interacting with backend REST APIs
 */

 angular.module("MoviesApp")
    .service("MoviesService", function ($http, $q) {

    var authToken = "xxxxxxxxxx";
    var deferred = $q.defer();

        // This is only used internally in the service
     $http.get('data/AllMovies.json', {params: {authToken: authToken}}).then(function (data) {
         deferred.resolve(data.data);
     });


    this.loadMore = function(skip, count){
        var moreDeferred = $q.defer();

        $http.get('data/MoviesByRank.json', {params: {authToken: authToken, StartRankIndex:skip, numMovies:count}})
            .then(function (data) {

            angular.forEach(data.data, function (movie) {
                movie["checked"] = false;
                movie["Details"] = {
                    isHidden: true
                };
            });

            // Comment this line when you plug in the actual api url
            moreDeferred.resolve(data.data.slice(skip, count));

            // Uncomment this line when you plug in the actual api url
            //moreDeferred.resolve(data.data);
        });

        return moreDeferred.promise;
    }


    this.showMovieDetails = function(movie){
        deferred.promise.then(function(movies){
            for(var i=0; i<movies.length; i++){
                var m = movies[i];
                if(movie.Id == m.Id){
                    movie.Details.Duration = m.Duration;
                    movie.Details.Description = m.Description;
                    movie.Details.Director = m.Director;
                    movie.Details.Genres = m.Genres;
                    movie.Details.Actors = m.Actors;
                    movie.Details.isHidden = false;
                    break;
                }
            }
        });
    }

    this.hideMovieDetails = function(movie){
        movie.Details = { isHidden: true};
    }
});
