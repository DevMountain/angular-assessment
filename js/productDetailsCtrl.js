
angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams) {

$scope.product_id = $stateParams.id

    shopService.getProduct().then( response => {
        $scope.product = response.data;
    })



    // $scope.show = false;

})

