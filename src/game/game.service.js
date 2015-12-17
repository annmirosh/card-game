(function () {
    'use strict';
    angular
        .module('cardGameApp')
        .service('gameService', GameService);

    var defaultImageArray = [
            'images/cat1.jpg',
            'images/cat2.jpg',
            'images/cat3.jpg'
        ],
        backImage = 'images/back-side.jpg';

    function GameService() {

        this.mixCards = mixCards;

        function mixCards() {
            var
                imageArray = defaultImageArray,
                cardCount = imageArray.length * 2,
                mixedArray = _.shuffle(_.range(cardCount)),
                cards = [];

            imageArray.concat(imageArray)
                .forEach(function (card, ind) {
                    cards.push(
                        {
                            id: mixedArray[ind],
                            image: card,
                            backImage:backImage,
                            isVisible: false
                        }
                    );
                });
            return _.sortBy(cards, 'id');
        }
    }
})();
