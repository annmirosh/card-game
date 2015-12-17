(function () {
    'use strict';

    angular
        .module('cardGameApp', [
            'ui.router'
        ])
        .config(UiRouterConfig);

    UiRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function UiRouterConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'game/game.html',
                controller: 'GameController as gameCtrl'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
