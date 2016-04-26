(function () {

  'use strict';

  angular.module('shop').directive('korb', korb);

  korb.$inject = [];

  function korb () {
    return {
      templateUrl: 'korb/korb.template.html',
      controller: 'KorbCtrl',
      controllerAs: 'lKorbCtrl'
    }
  }
})();

