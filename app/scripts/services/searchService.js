'use strict';

angular.module('songsByCountryApp')
  .factory('searchService', ['$q', '$http', function($q, $http) {
    return {
      search: function (query) {
        var deferred = $q.defer();

        if (query.search(':') !== - 1) {
          query = query.replace('spotify', '').replace('track', '').replace(new RegExp(':', 'g'), '');

          $http.get('https://api.spotify.com/v1/tracks/'+query).success(function (response) {
            deferred.resolve(response);
          });
        } else {
          $http.get('https://api.spotify.com/v1/search?q='+query+'&type=track').success(function (response) {
            deferred.resolve(response);
          });
        }

        return deferred.promise;
      }
    };
  }]);