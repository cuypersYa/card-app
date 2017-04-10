import { PallcenterPage } from './app.po';

describe('pallcenter App', function() {
  let page: PallcenterPage;

  beforeEach(() => {
    page = new PallcenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
