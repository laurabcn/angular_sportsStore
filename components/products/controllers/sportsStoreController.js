angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function($scope, $http, dataUrl){
        var self = this;
        self.data = {};

        $http.get(dataUrl)
            .success(function(data){
                self.data.products = data;
            })
            .error( function (error) {
                self.data.error = error;
            });
    });