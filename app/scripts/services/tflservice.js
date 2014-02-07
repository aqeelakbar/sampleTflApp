'use strict';

angular.module('ngTflApp')
	.service('xmlToJson', function () {
	// Create the return object
		

    })
    .factory('TFLStatus', function ($http, localStorageService) {
    // Service logic
    // ...
	    return {
			get: function(successCallback) {
				$http.jsonp('http://www.schizdazzle.com/feed.php?callback=JSON_CALLBACK')
				.success(function(data) {
					successCallback(data.LineStatus, new Date());
					localStorageService.set('ngTFLStatus', data.LineStatus);
					localStorageService.set('ngTFLTimeStamp', new Date());
				}).
				error(function() {
					console.log('ERROR: Could not get data.');
					successCallback(localStorageService.get('ngTFLStatus'),  Date.parse(localStorageService.get('ngTFLTimeStamp')));
				});
			},

			onLine: function() {
				//checks to see the status of the user's connection
				return navigator.onLine
			}
		};
	});
