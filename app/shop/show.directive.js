(function () {

  'use strict';

  //???? ?????? shop??
  angular.module('shop').directive('someShop', someShop);

  someShop.$inject = [];

  function someShop() {
    return {
      templateUrl: 'shop/shop.html',
      controller: 'listCtrl',
      controllerAs: 'lCtrl'
    }
  }
})();