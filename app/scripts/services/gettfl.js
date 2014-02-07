'use strict';

angular.module('ngTflApp')
  .factory('TFLStatus', function ($http) {
    // Service logic
    // ...
    return {
      get: function(successCallback) {
        $http.jsonp('http://api.tubeupdates.com?method=get.status&callback=JSON_CALLBACK').
          success(function(data) {
            successCallback(data);
          }).
          error(function() {
            console.log('ERROR: Could not get data.');
          });
      }
    };

  });
