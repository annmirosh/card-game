(function () {
    'use strict';
    angular
        .module('cardGameApp')
        .controller('GameController', GameController);

    GameController.$inject = ['gameService', '$timeout'];

    function GameController(gameService, $timeout) {
        var me = this;
        this.cards = gameService.mixCards();
        this.onClickCallback = onClickCallback;

        function onClickCallback(i) {
            var
                currentCard = this.cards[i],
                firstCard,
                secondCard,
                openCards;

            if (currentCard.isResolved || areTwoCardsOpenedAndNotResolved()) {
                return;
            }

            currentCard.isVisible = true;

            if (areTwoCardsOpenedAndNotResolved()) {
                openCards = getOpenAndNotResolvedCards();
                firstCard = openCards[0];
                secondCard = openCards[1];

                if (firstCard.image !== secondCard.image) {
                    $timeout(function () {
                        me.cards.forEach(function (card) {
                            if (!card.isResolved) {
                                card.isVisible = false;
                            }
                        });
                    }, 500);
                } else {
                    _.filter(this.cards, function (card) {
                            return card.id === firstCard.id || card.id === secondCard.id;
                        })
                        .forEach(function (card) {
                            card.isResolved = true;
                        });
                }
            }
        }

        function getOpenAndNotResolvedCards() {
            return _.filter(me.cards, openAndNotResolvedCondition);
        }

        function areTwoCardsOpenedAndNotResolved() {
            return _.filter(me.cards, openAndNotResolvedCondition).length === 2;
        }

        function openAndNotResolvedCondition(card) {
            return card.isVisible && !card.isResolved;
        }
    }
})();
