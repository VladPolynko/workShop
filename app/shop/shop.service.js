angular
    .module('products')
    .service('shopUtils', shopUtils);

shopUtils.$inject = [];

function shopUtils() {

  var shopServices = {
    shopItems: [
      {
        id: 1,
        title: 'human',
        description: 'this human',
        polygons: 200,
        type: "human",
        cost: 2
      },
      {
        id: 3,
        title: 'human3',
        description: 'this human',
        polygons: 300,
        type: "human",
        cost: 3
      },
      {
        id: 2,
        title: 'rock',
        description: 'this rock',
        polygons: 100,
        type: "decoration",
        cost: 4
      }
    ],


    getShopItem: function (itemId) {
      var findedItem = _.find(shopServices.shopItems, function (item) {
        return item.id == itemId
      });

      return findedItem;
    }
  };

  return shopServices
}

