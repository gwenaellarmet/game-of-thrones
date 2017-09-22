import { GameOfThronesDemoPage } from './app.po';

describe('game-of-thrones-demo App', () => {
  let page: GameOfThronesDemoPage;

  beforeEach(() => {
    page = new GameOfThronesDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
