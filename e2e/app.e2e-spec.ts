import { RouteringPage } from './app.po';

describe('routering App', function() {
  let page: RouteringPage;

  beforeEach(() => {
    page = new RouteringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
