import { NosVamosClientPage } from './app.po';

describe('nos-vamos-client App', function() {
  let page: NosVamosClientPage;

  beforeEach(() => {
    page = new NosVamosClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
