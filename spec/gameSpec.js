describe("Game", function() {

  var game;
  var winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

  beforeEach(function() {
    game = new Game();
  });

  describe("At the start it ...", function() {

    it("should have an array of winning combinations", function () {
      expect(game.getWinners()).toEqual(winners);
    });

  });

});
