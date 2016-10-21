function Moves() {
  this._remainingMoves = [1,2,3,4,5,6,7,8,9];
  this._xMoves = [];
  this._oMoves = [];
  this._turn = "X";
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

  play: function (number) {
    (this.checkTurn()) ? this._xMoves.push(number) : this._oMoves.push(number);
    var index = this.getRemainingMoves().indexOf(number);
    if (index > -1) { this._remainingMoves.splice(index, 1);}
    this._swapTurns();
  },

  checkTurn: function () {
    if (this._turn === "X") { return true };
  },

  _swapTurns: function () {
    (this.checkTurn()) ? this._turn = "O" : this._turn = "X";
  }

};
