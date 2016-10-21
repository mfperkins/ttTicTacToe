describe("Game", function() {

  var game;
  var winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var someMoves = [1,2,4,5,7,8];
  moves = jasmine.createSpyObj("moves", ['play', 'getRemainingMoves', 'getXMoves', 'getOMoves', 'checkTurn']);

  beforeEach(function() {
    game = new Game();
  });

  describe("At the start it ...", function() {

    it("should have an array of winning combinations", function () {
      expect(game.getWinners()).toEqual(winners);
    });

  });

  describe("#moves produce an X Win", function () {

    beforeEach(function() {
      moves.getRemainingMoves.and.returnValue([3,6,8,9]);
      moves.getXMoves.and.returnValue([1,4,7]);
      moves.getOMoves.and.returnValue([2,5]);
      moves.checkTurn.and.returnValue(true);
    });

    it("should send the number to the Moves object ", function () {
      game.move(someMoves[0]);
      expect(moves.play).toHaveBeenCalledWith(1);
    });


    it("should declare a winner", function () {
      expect(game.move(someMoves[5])).toEqual("X is the winner!");
    });

  });

  describe("#moves produce an 0 Win", function () {

    beforeEach(function() {
      moves.getRemainingMoves.and.returnValue([4,6,7]);
      moves.getXMoves.and.returnValue([1,9,3]);
      moves.getOMoves.and.returnValue([2,5,8]);
      moves.checkTurn.and.returnValue(false);
    });

    it("should declare a winner", function () {
      expect(game.move(someMoves[6])).toEqual("O is the winner!");
    });

  });


  describe("#moves producing Game Over", function () {

    beforeEach(function(){
      moves.getRemainingMoves.and.returnValue([]);
    });

    it("should declare 'Game Over' if movesRemaining === 0", function () {
      expect(game.move(someMoves[0])).toEqual("Game Over");
    });

  });


});
