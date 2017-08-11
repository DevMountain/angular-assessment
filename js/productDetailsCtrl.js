
angular.module('assessment')
    .controller('productDetailsCtrl', function($scope, $stateParams, shopService) {

    $scope.product_id = $stateParams.id

    $scope.getProduct = function(id) {
        shopService.getProduct(id).then(function(response) {
          $scope.product = response.data;

    // $scope.show = false;

    console.log('====================================')
    console.log("product_id" , $scope.product_id);
    console.log("product" , $scope.product);
    console.log('====================================')
    
  })
}

});