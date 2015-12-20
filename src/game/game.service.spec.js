(function () {
    'use strict';

    describe('GameService:', function () {

        var gameService = null;

        beforeEach(function () {
            module('cardGameApp');
        });

        beforeEach(inject(function (_gameService_) {
            gameService = _gameService_;
        }));

        it('should have mixCards() method', function () {
            expect(gameService.mixCards).to.exist;
        });

        it('card should contain predefined properties', function () {
            var card = gameService.mixCards(2)[0];
            expect(card.id).to.exist;
            expect(card.image).to.exist;
            expect(card.backImage).to.exist;
            expect(card.isVisible).to.exist;
        });
    });
})();