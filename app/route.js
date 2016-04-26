(function () {
    'use strict';

    angular
            .module('shop')
            .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];

    function config($routeProvider) {
        $routeProvider
                .when('/korb', {
                    template: '<korb></korb>'
                })
                .when('/korbs/:id', {
                    template: '<h2>Some Korbs</h2>'
                })
                .when('/', {
                    template: '<some-shop></some-shop>'
                })
                .otherwise({
                    template: '<h2>404 Page Note Found</h2>'
                });
    }
})();