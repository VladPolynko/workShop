(function () {
  'use strict';

  angular
          .module('products')
          .service('korbStorage', korbStorage);

  korbStorage.$inject = ['shopUtils'];

  function korbStorage(shopUtils) {
    var _korb = [];
    var korbQuantity = 0;
    var korbItem = function (id, quantity) {
      return {
        id: id,
        quantity: quantity,
        sum: shopUtils.getShopItem(id).cost * quantity,
        name: shopUtils.getShopItem(id).title,
        description: shopUtils.getShopItem(id).description
      }
    };

    var service = {
      addKorbItem: addKorbItem,
      getKorb: getKorb,
      korb: _korb,
      korbQuantitysAdd: korbQuantityAdd,
      korbQuantityGet: korbQuantityGets,
      removeKorbItem: removeKorbItem
    };


    function addKorbItem(id, quantity) {
      korbQuantityAdd();
      korbQuantityGets();
      console.log(_korb);
      return _korb.push(new korbItem(id, quantity))
    }
    function removeKorbItem(id) { //
      for(var i in _korb ){
        if(id === _korb[i].id){
          console.log(_korb[i]);
          delete _korb[i];
          break;
        }
      }
      //return ;
    }

    function getKorb() {
      return _korb;
    }

    function korbQuantityAdd() {
      return ++korbQuantity;
    }

    function korbQuantityGets() {
      console.log(korbQuantity);
      return korbQuantity;
    }


    return service;
  }
})();