import { Angular4ModulesExamplePage } from './app.po';

describe('angular4-modules-example App', () => {
  let page: Angular4ModulesExamplePage;

  beforeEach(() => {
    page = new Angular4ModulesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
