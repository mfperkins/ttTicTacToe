describe("Game", function() {

  var game;
  var winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var firstMoves = [1,4,7];
  var secondMoves = [7,9,8];
  var allMoves = [1,2,3,4,5,6,7,8,9];
  moves = jasmine.createSpyObj("moves", ['play', 'getRemainingMoves']);

  beforeEach(function() {
    game = new Game();
  });

  describe("At the start it ...", function() {

    it("should have an array of winning combinations", function () {
      expect(game.getWinners()).toEqual(winners);
    });

  });

  describe("#move", function () {

    it("should send the number to the Moves object ", function () {
      game.move(firstMoves[0]);
      expect(moves.play).toHaveBeenCalledWith(1);
    });

  });

  describe("#move", function () {

    beforeEach(function(){
      for (var i = 0; i < allMoves.length-1; i++) {
        game.move(firstMoves[i]);
      }
      moves.getRemainingMoves.and.returnValue([]);
    });

    it("should declare 'Game Over' if movesRemaining === 0", function () {
      expect(game.move(9)).toEqual("Game Over");
    });

  });


});
