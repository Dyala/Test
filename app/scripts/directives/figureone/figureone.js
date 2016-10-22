'use strict';

    $(document).ready(function(){
      $("#current-pointer").animate({top: '56%'}, 5000);
      $("#current-pointer2").animate({top: '60%'}, 5000);
      $("#potenial-pointer").animate({top: '80%'}, 5000);
  });



angular.module('sbAdminApp')
	.directive('figureone',function(){
		return {
        templateUrl:'scripts/directives/figureone/figureone.html',
        
        
    	}
	});
