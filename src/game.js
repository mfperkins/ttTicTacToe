function Game() {
  this._winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this._moves = (typeof moves !== 'undefined') ?  moves : new Moves();
}

Game.prototype = {

  getWinners: function() {
    return this._winners;
  },

  move: function (number) {
    this._moves.play(number);
    if (this._isGameOver() !== null ) { return this._isGameOver(); }



  },

  _isGameOver: function() {
    if (this._moves.getRemainingMoves.length === 0) { return "Game Over" ;}
  },

};
