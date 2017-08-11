// INITILIZE SERVICE
// ============================================================
angular.module('assessment')
	.service('shopService', function($http, $q, $stateParams){


		this.getProducts = () => {
			return $http({
				method: 'GET',
				url: 'https://practiceapi.devmountain.com/products'
			})
		}
		this.getProduct = (name) => {
			var deferred = $q.defer();
  			$http({
				method: 'GET',
				url: 'https://practiceapi.devmounta.in/products/' + name
				}).then(function(info) {
					
    var theItem = info.data

  console.log('theItem', theItem);
  deferred.resolve(theItem)
  })
  return deferred.promise
}
			
		
	}) 

