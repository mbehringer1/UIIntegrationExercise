import { UiintegrationAppPage } from './app.po';

describe('uiintegration-app App', function() {
  let page: UiintegrationAppPage;

  beforeEach(() => {
    page = new UiintegrationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
