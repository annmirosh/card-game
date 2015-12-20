'use strict';

describe('Game page', function () {
    beforeEach(function () {
        browser.get('#');
    });

    it('Cards should be displayed after choosing the size of the deck', function () {
        expect(element(by.id('deck')).isPresent()).toBe(false);

        element(by.cssContainingText('option', '2x2'))
            .click()
            .then(function () {
                expect(element(by.id('deck')).isPresent()).toBe(true);
            });
    });

    it('Reset button should close all cards', function () {
        element(by.cssContainingText('option', '2x2'))
            .click()
            .then(function () {

                element(by.id('card0')).click();

                element(by.id('resetGame')).click();

                for (var i = 0; i < 4; i++) {
                    expect(element(by.id('card' + i)).getAttribute('src')).toContain('back-side');
                }
            });
    });

    it('Reset button should close all cards', function () {
        element(by.cssContainingText('option', '2x2'))
            .click()
            .then(function () {

                element(by.id('card0')).click();

                element(by.id('resetGame')).click();

                for (var i = 0; i < 4; i++) {
                    expect(element(by.id('card' + i)).getAttribute('src')).toContain('back-side');
                }
            });
    });
});