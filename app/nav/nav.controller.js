(function () {
    'use strict';

    angular
            .module('products')
            .controller('indexController', indexController);

    indexController.$inject = [
        'korbStorage'
    ];

    function indexController(korbStorage) {
        var self = this;
        self.quantity = korbStorage.korbQuantityGet();
        console.log(self.quantity);

    }
})();
