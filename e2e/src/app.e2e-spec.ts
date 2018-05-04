import { AppPage } from './app.po';

describe('angular-cli App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Geospatial Web', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Geospatial Web');
    });
});
