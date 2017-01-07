import { ChefChallengeWebPage } from './app.po';

describe('chef-challenge-web App', function() {
  let page: ChefChallengeWebPage;

  beforeEach(() => {
    page = new ChefChallengeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
