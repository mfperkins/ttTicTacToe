describe("The Game of TicTacToe", function() {

  var game;
  var winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

  beforeEach(function() {
    game = new Game();
  });

  describe("Game", function() {

    it("should have an array of winning combinations", function () {
      expect(game.get_winners()).toEqual(winners);
    });

  });

});
