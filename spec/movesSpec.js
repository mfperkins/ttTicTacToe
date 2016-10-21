describe("Moves", function() {

  var moves;
  var remaining = [1,2,3,4,5,6,7,8,9];
  var xMoves = [];
  var yMoves = [];
  var move1 = 1;
  var move2 = 7;

  beforeEach(function() {
    moves = new Moves();
  });

  describe("At the start it ...", function() {

    it("should have an array of all remaining moves", function () {
      expect(moves.getRemainingMoves()).toEqual(remaining);
    });

    it("should have an empty array of X moves", function () {
      expect(moves.getXMoves()).toEqual(xMoves);
    });

    it("should have an empty array of O moves", function () {
      expect(moves.getOMoves()).toEqual(yMoves);
    });

  });

  describe("#checkTurn", function() {

    it("should return true if it's X's go", function() {
      expect(moves.checkTurn()).toEqual(true);
    });

    it("should return false if it's O's go", function() {
      moves.play(move1);
      expect(moves.checkTurn()).toEqual(undefined);
    });

  });

  describe("#play", function () {

    beforeEach(function() {
      moves.play(move1);
      moves.play(move2);
    });

    it("the first turn should push a move into the xMoves array", function() {
      expect(moves.getXMoves()).toContain(move1);
    });

    it("the 2nd move should push a move into the oMoves array", function() {
      expect(moves.getOMoves()).toContain(move2);
    });

    it("both moves should be removed from the remaining array", function() {
      expect(moves.getRemainingMoves()).not.toContain(move1);
      expect(moves.getRemainingMoves()).not.toContain(move2);
    });
  });

});
