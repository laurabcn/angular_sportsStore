angular.module("sportsStore")
    .controller("cartSummaryController", function($scope, cart) {

        var self = this;

        self.cartData = cart.getProducts();

        self.total = function () {
            var total = 0;
            for (var i = 0; i < $scope.cartData.length; i++) {
                total += ($scope.cartData[i].price * $scope.cartData[i].count);
            }
            return total;
        };

        self.remove = function (id) {
            cart.removeProduct(id);
        }
    });