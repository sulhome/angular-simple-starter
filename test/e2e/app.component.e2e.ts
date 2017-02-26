import { browser, element, by } from 'protractor';

describe('App e2e', function() {
    beforeEach(() => {
        browser.get('/');
    });

    it("h1 text should match", () => {
        element(by.tagName('h1')).getText()
            .then((text: string) => {
                expect(text).toEqual('Looking good');
            });
    });
});