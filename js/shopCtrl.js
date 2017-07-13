// INITILIZE CONTROLLER
// ============================================================
angular.module("assessment")
    .controller("shopCtrl", function($scope, shopService, $state , $stateParams) {

        // VARIABLES
        // ============================================================

log
        // FUNCTIONS
        // ============================================================
shopService.getProducts().then(function(response){
    $scope.products = response.data;
    $scope.getProducts = response.data;
console.log($scope.products)
    })
    shopService.getProduct($stateParams.id).then(function(item) {
        console.log(item);
  $scope.item = item;
})
});



 