function Moves() {
  this._remainingMoves = [1,2,3,4,5,6,7,8,9];
  this._xMoves = [];
  this._oMoves = [];
}

Moves.prototype = {

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
