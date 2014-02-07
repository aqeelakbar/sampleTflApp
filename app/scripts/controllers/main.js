'use strict';

angular.module('ngTflApp')
  .controller('MainCtrl', function ($scope, TFLStatus) {
    
  	var populateLines = function() {
		TFLStatus.get(function (data, timeStamp, status){
	    	// checks to see if the user is online or offline.
	    	$scope.connection = TFLStatus.onLine();
	    	$scope.lineStatus = data;
	    	$scope.timeStamp = timeStamp;
	    });
	}


	// refresh the lines to get the latest info
    $scope.refreshLines= function() {
		populateLines();
	}

	//load the lines
	populateLines();

	

  });
