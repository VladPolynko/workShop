(function () {
    'use strict';

    angular
            .module('products')
            .controller('KorbCtrl', KorbCtrl);

    KorbCtrl.$inject = [
        'korbStorage'
    ];

    function KorbCtrl(korbStorage) {
        var self = this;
        self.see = false;
        self.korbs = korbStorage.korb;

        if (self.korbs.length == 0) {
            self.see = true
        }
        self.remove = function (id) {
            korbStorage.removeKorbItem(id);
        };

    }
})();