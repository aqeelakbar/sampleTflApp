'use strict';

angular.module('ngTflApp')
  .controller('MainCtrl', function ($scope, TFLStatus) {
    TFLStatus.get(function (data, timeStamp, status){
    	$scope.lineStatus = data;
    	$scope.timeStamp = timeStamp;
    	$scope.connection = status;
      console.log(data)
    });
  });
