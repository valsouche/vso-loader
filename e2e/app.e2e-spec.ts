import { VsoLoaderPage } from './app.po';

describe('vso-loader App', () => {
  let page: VsoLoaderPage;

  beforeEach(() => {
    page = new VsoLoaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
