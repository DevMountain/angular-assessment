angular.module('assessment')
.service('shopService', function($http, $q, $state) {




	this.products = function(products) {
		return $http({
			url:'http://practiceapi.devmounta.in/products/json',
			method: 'GET'
		}).then(function(results){
			return($scope.products = results)
		})
	}














})





















    