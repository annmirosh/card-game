(function () {
    'use strict';
    angular
        .module('cardGameApp')
        .directive('cgCard', Card);

    function Card() {
        return {
            scope: {
                card: '=',
                onClick: '&'
            },
            templateUrl: 'card/card.html'
        };
    }
})();


