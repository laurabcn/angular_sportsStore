angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount, cart){

        var self = this;

        self.selectedCategory = null;
        self.selectedPage = 1;
        self.pageSize = productListPageCount;

        self.selectCategory = function(newCategory){
            self.selectedCategory = newCategory;
            self.selectedPage = 1;
        };

        self.selectPage = function(newPage){
            self.selectedPage = newPage;
        };

        self.categoryFilterFn = function(product){
            return self.selectedCategory == null || product.category == self.selectedCategory;
        };

        self.getCategoryClass = function(category){
            return self.selectedCategory == category ? productListActiveClass : "";
        };

        self.getPageClass = function(page){
            return self.selectedPage == page ? productListActiveClass : "";
        };

        self.addProductToCart = function(product){
            cart.addProduct(product.id, product.name, product.price);
        }
    });