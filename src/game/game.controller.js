(function () {
    'use strict';
    angular
        .module('cardGameApp')
        .controller('GameController', GameController);

    GameController.$inject = ['GameService', '$timeout'];

    function GameController(GameService, $timeout) {
        this.cards = GameService.mixCards();
        this.openCards = [];

        this.onClickCallback = function (i) {
            var
                tempCards = this.cards,
                currentCard = tempCards[i],
                firstCard,
                secondCard,
                me = this;

            if (currentCard.isResolved) {
                return;
            }

            currentCard.isVisible = true;

            this.openCards.push(currentCard);

            if (this.openCards.length === 2) {
                firstCard = this.openCards[0];
                secondCard = this.openCards[1];

                if (firstCard.image !== secondCard.image) {
                    $timeout(function () {
                        tempCards.forEach(function (card) {
                            if (!card.isResolved) {
                                card.isVisible = false;
                            }
                        });
                        me.cards = tempCards;
                    }, 500);
                } else {
                    _.filter(tempCards, function (card) {
                        return card.id === firstCard.id || card.id === secondCard.id;
                    }).forEach(function (card) {
                        card.isResolved = true;
                    });
                }
                this.openCards = [];
            }
            this.cards = tempCards;
        }
    }
})();
