'use strict';

angular.module('songsByCountryApp')
  .factory('searchService', ['$q', '$http', function($q, $http) {
    return {
      search: function (query) {
        var deferred = $q.defer();

        $http.get('https://api.spotify.com/v1/search?q='+query+'&type=track').success(function (response) {
          deferred.resolve(response);
        });

        return deferred.promise;
      }
    };
  }]);