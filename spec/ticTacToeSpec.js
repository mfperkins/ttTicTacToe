describe("The Game of TicTacToe", function() {

  var game;
  var winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var remaining = [1,2,3,4,5,6,7,8,9];
  var xMoves = [];
  var yMoves = [];

  beforeEach(function() {
    game = new Game();
  });

  describe("Game", function() {

    it("should have an array of winning combinations", function () {
      expect(game.getWinners()).toEqual(winners);
    });

    it("should have an array of all remaining moves", function () {
      expect(game.getRemainingMoves()).toEqual(remaining);
    });

    it("should have an empty array of X moves", function () {
      expect(game.getXMoves()).toEqual(xMoves);
    });

    it("should have an empty array of O moves", function () {
      expect(game.getOMoves()).toEqual(yMoves);
    });

  });

});
