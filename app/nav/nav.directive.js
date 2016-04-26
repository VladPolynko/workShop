(function () {

    'use strict';

    angular.module('shop').directive('nav', nav);

    nav.$inject = [];

    function nav () {
        return {
            templateUrl: 'nav/nav.html',
            controller: 'indexController',
            controllerAs: 'lIndexController'
        }
    }
})();

