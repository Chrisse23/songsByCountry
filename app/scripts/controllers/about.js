'use strict';

/**
 * @ngdoc function
 * @name songsByCountryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the songsByCountryApp
 */
angular.module('songsByCountryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
