(function () {
    'use strict';
    angular
        .module('cardGameApp')
        .service('gameService', GameService);

    var defaultImageArray = [
            'images/card1.png',
            'images/card2.png',
            'images/card3.png',
            'images/card4.png',
            'images/card5.png',
            'images/card6.png',
            'images/card7.png',
            'images/card8.png'
        ],
        backImage = 'images/back-side.jpg';

    function GameService() {

        this.mixCards = mixCards;

        function mixCards(count) {
            var
                imageArray = _.shuffle(defaultImageArray).slice(0, count * count / 2),
                cardCount = imageArray.length * 2,
                mixedArray = _.shuffle(_.range(cardCount)),
                cards = [];

            imageArray.concat(imageArray)
                .forEach(function (card, ind) {
                    cards.push(
                        {
                            id: mixedArray[ind],
                            image: card,
                            backImage: backImage,
                            isVisible: false
                        }
                    );
                });
            return _.sortBy(cards, 'id');
        }
    }
})();
