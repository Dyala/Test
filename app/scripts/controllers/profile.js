'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ProfileCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
$scope.options=[
	{
		name:"Manufacturing", 
		selected:false
	},
	{
		name:"Retail", 
		selected:false	
	},
	{
		name:"Construction", 
		selected:false	
	},

	{
		name:"Logistics", 
		selected:false	
	},
	{
		name:"Education", 
		selected:false	
	},
	{
		name:"Healthcare", 
		selected:false	
	},
	{
		name:"Oil and Gas", 
		selected:false	
	},
	{
		name:"Transportation", 
		selected:false	
	},
	{
		name:"Consultancy", 
		selected:false	
	},
	{
		name:"Hospitality", 
		selected:false	
	}
	];

}]);



















