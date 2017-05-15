import { DcSitePage } from './app.po';

describe('dc-site App', () => {
  let page: DcSitePage;

  beforeEach(() => {
    page = new DcSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works! - Angular Hello world');
  });
});
