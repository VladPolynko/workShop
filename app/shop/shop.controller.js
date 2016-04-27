angular
        .module('products')
        .controller('listCtrl', listCtrl);

listCtrl.$inject = [
    '$scope',
    'shopUtils',
    'korbStorage'
];

function listCtrl($scope,shopData, korbStorage) {
    var self = this;
    self.shopItems = shopData.shopItems;

    self.ot = 0;
    self.do = 100000;

    self.andFromFilter = function (otNum, doNum) {
        var lotNum = otNum || 0;
        var ldoNum = doNum || 9999999;

        return function (item) {
            return item.polygons >= lotNum && item.polygons <= ldoNum;
        };
    };

    self.add = function (id, quantity) {
        korbStorage.addKorbItem(id, quantity);
        self.latestKorbs = korbStorage.getKorb();

        $scope.$emit('changeKorb');
    };
}

