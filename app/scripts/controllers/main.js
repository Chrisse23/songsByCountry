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
		'BG': 'Bulgaria',
		'BR': 'Brazil',
		'BO': 'Bolivia',
		'CA': 'Canada',
		'CH': 'Switzerland',
		'CL': 'Chile',
		'CO': 'Colombia',
		'CR': 'Costa Rica',
		'CY': 'Cyprus',
		'CZ': 'Czech Republic',
		'DE': 'Germany',
		'DK': 'Denmark',
		'DO': 'Dominican Republic',
		'EC': 'Ecuador',
		'EE': 'Estonia',
		'ES': 'Spain',
		'FI': 'Finland',
		'FR': 'France',
		'GB': 'United Kingdom',
		'GR': 'Greece',
		'GT': 'Guatemala',
		'HK': 'Hong Kong',
		'HN': 'Honduras',
		'HU': 'Hungary',
		'IE': 'Ireland',
		'IS': 'Iceland',
		'IT': 'Italy',
		'LI': 'Liechtenstein',
		'LT': 'Lithuania',
		'LU': 'Luxembourg',
		'LV': 'Latvia',
		'MC': 'Monaco',
		'MT': 'Malta',
		'MY': 'Malalysia',
		'MX': 'Mexico',
		'NL': 'Netherlands',
		'NI': 'Nicaragua',
		'NO': 'Norway',
		'NZ': 'New Zealand',
		'PA': 'Panama',
		'PE': 'Peru',
		'PH': 'Philippines',
		'PL': 'Poland',
		'PT': 'Portugal',
		'PY': 'Paraguay',
		'RO': 'Romania',
		'SE': 'Sweden',
		'SG': 'Singapore',
		'SI': 'Slovenia',
		'SK': 'Slovakia',
		'SV': 'El Salvador',
		'TR': 'Turkey',
		'TW': 'Taiwan',
		'US': 'United States',
		'UY': 'Uruguay'
	};
	
	$scope.searchForSongs = function () {
		$scope.countries = [];
		nextTrack = 0;

		if ($scope.query) {
			var promise = searchService.search($scope.query);

			var successCallback = function (data) {
				response = data;
				
				if (response.hasOwnProperty('tracks')) {
					$scope.track = response.tracks.items[0].name + ' - ' + response.tracks.items[0].artists[0].name;
				} else {
					translateCountryCode(response.available_markets);
					$scope.showList = true;
				}
			};

			promise.then(successCallback);
		}
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
