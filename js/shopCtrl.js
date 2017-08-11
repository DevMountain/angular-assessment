// INITILIZE CONTROLLER
// ============================================================
angular.module("assessment")
    .controller("shopCtrl", function($scope, shopService, $state , $stateParams) {

        // VARIABLES
        // ============================================================

        // FUNCTIONS
        // ============================================================
shopService.getProducts().then(function(response){
    $scope.getProducts = response.data;
    $scope.id = response.data.id;
console.log("$scope.products" , $scope.products)
console.log("$scope.id" , $scope.id)
    })
    shopService.getProduct($stateParams.id).then(function(item) {
    $scope.item = item;

console.log(item);
})
});
