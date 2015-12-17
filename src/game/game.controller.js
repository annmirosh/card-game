(function () {
    'use strict';
    angular
        .module('cardGameApp')
        .controller('GameController', GameController);

    GameController.$inject = ['gameService', '$timeout'];

    function GameController(gameService, $timeout) {
        var me = this;

        restartGame();

        this.onClickCallback = onClickCallback;
        this.restartGame = restartGame;

        function restartGame() {
            me.cards = gameService.mixCards();
            me.gameFinished = false;
        }

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

            me.gameFinished = getCountOfResolvedCards() === me.cards.length;
        }

        function getOpenAndNotResolvedCards() {
            return _.filter(me.cards, openAndNotResolvedCondition);
        }

        function areTwoCardsOpenedAndNotResolved() {
            return _.filter(me.cards, openAndNotResolvedCondition).length === 2;
        }

        function getCountOfResolvedCards() {
            return _.filter(me.cards, isCardResolved).length;
        }

        function openAndNotResolvedCondition(card) {
            return card.isVisible && !card.isResolved;
        }

        function isCardResolved(card) {
            return card.isResolved;
        }
    }
})();
