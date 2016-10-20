describe("Moves", function() {

  var moves;
  var remaining = [1,2,3,4,5,6,7,8,9];
  var xMoves = [];
  var yMoves = [];

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

});
