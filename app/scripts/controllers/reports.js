'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
 angular.module('sbAdminApp')
 .controller('ReportsCtrl', ['$scope', '$timeout', '$window', '$http', function ($scope, $timeout, $window, $http) {

 	$scope.openPdf = function(){
 		$window.open('./images/results.pdf', "_blank");

 		// $http.get('./images/results.pdf')
 		// .then(function (data) {
 		// 	var file = new Blob([data], {type: 'application/pdf'});
 		// 	var fileURL = URL.createObjectURL(file);
 		// 	$window.open(fileURL);
 		// });
 	};

}]);



















