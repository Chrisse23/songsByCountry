'use strict';

/**
 * @ngdoc function
 * @name songsByCountryApp.controller:searchController
 * @description
 * # searchController
 * Controller of the songsByCountryApp
 */
angular.module('songsByCountryApp').controller('searchController', ['$scope', 'searchService', function ($scope, searchService) {
	$scope.query = '';
	$scope.countries = [];
	$scope.track = '';
	$scope.showList = false;
	var nextTrack = 0;
	var response = '';

	var mappedCountryCodes = {
		'AD': 'Andorra',
		'AR': 'Argentina',
		'AT': 'Austria',
		'AU': 'Australia',
		'BE': 'Belgium',
		'BR': 'Brazil',
		'BO': 'Bolivia',
		'CL': 'Chile',
		'CO': 'Colombia',
		'CY': 'Cyprus',
		'CZ': 'Czech Republic',
		'DE': 'Germany',
		'DK': 'Denmark',
		'EE': 'Estonia',
		'ES': 'Spain',
		'FI': 'Finland',
		'FR': 'France',
		'GB': 'United Kingdom',
		'GR': 'Greece',
		'HK': 'Hong Kong',
		'HU': 'Hungary',
		'IE': 'Ireland',
		'IS': 'Iceland',
		'IT': 'Italy',
		'LT': 'Lithuania',
		'LU': 'Luxembourg',
		'LV': 'Latvia',
		'MC': 'Monaco',
		'MY': 'Malalysia',
		'NL': 'Netherlands',
		'NO': 'Norway',
		'NZ': 'New Zealand',
		'PH': 'Philippines',
		'PL': 'Poland',
		'PT': 'Portugal',
		'RO': 'Romania',
		'SE': 'Sweden',
		'SG': 'Singapore',
		'SI': 'Slovenia',
		'SK': 'Slovakia',
		'TR': 'Turkey',
		'TW': 'Taiwan'
	};
	
	$scope.searchForSongs = function () {
		$scope.countries = [];
		nextTrack = 0;

		var promise = searchService.search($scope.query);

		var successCallback = function (data) {
			response = data;

			$scope.track = response.tracks.items[0].name + ' - ' + response.tracks.items[0].artists[0].name;
		};

		promise.then(successCallback);
	};

	var translateCountryCode = function (countryCodes) {
		$scope.countries = [];
		
		angular.forEach(countryCodes, function (countryCode) {
			var code = mappedCountryCodes.hasOwnProperty(countryCode) ?
				mappedCountryCodes[countryCode] : countryCode;
			$scope.countries.push(code);
		});
	};

	$scope.showNextTrack = function (next) {
		if (next) {
			nextTrack++;
		}

		var attributes = response.tracks.items[nextTrack];
		
		$scope.track = attributes.name + ' - ' + attributes.artists[0].name;

		if ($scope.showList) {
			translateCountryCode(attributes.available_markets);
		}
	};
}]);
