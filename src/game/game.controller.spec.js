(function () {
    'use strict';

    describe('GameController:', function () {

        var
            scope,
            GameController;

        beforeEach(function () {
            module('cardGameApp');
        });

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            GameController = $controller('GameController', {
                $scope: scope
            });
        }));

        it('should have onClickCallback() method', function () {
            expect(GameController.onClickCallback).to.exist;
        });

        it('should have restartGame() method', function () {
            expect(GameController.restartGame).to.exist;
        });

        it('restartGame() should reset gameFinished flag', function () {
            GameController.gameFinished = true;

            expect(GameController.gameFinished).to.equal(true);

            GameController.restartGame();
            scope.$digest();

            expect(GameController.gameFinished).to.equal(false);
        });

    });
})();