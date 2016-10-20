function Game() {
  this._winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this._remainingMoves = [1,2,3,4,5,6,7,8,9];
  this._xMoves = [];
  this._oMoves = [];
}

Game.prototype = {

  getWinners: function() {
    return this._winners;
  },

  getRemainingMoves: function() {
    return this._remainingMoves;
  },

  getXMoves: function() {
    return this._xMoves;
  },

  getOMoves: function() {
    return this._oMoves;
  },

};
