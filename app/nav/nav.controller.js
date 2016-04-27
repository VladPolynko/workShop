(function () {
    'use strict';

    angular
            .module('products')
            .controller('indexController', indexController);

    indexController.$inject = [
        '$scope',
        'korbStorage'
    ];

    function indexController($scope,
                             korbStorage) {
        var self = this;
        self.quantity = korbStorage.korbQuantityGet();

        $scope.$on('changeKorb', function () {
            self.quantity = korbStorage.korbQuantityGet();
        });


        console.log(self.quantity);
    }
})();
