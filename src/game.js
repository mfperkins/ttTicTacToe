function Game() {
  this._winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this._moves = (typeof moves !== 'undefined') ?  moves : new Moves();
  this._turn = (this._moves.checkTurn() === true) ? "X" : "O";
}

Game.prototype = {

  getWinners: function() {
    return this._winners;
  },

  move: function (number) {
    this._moves.play(number);
    if (this._isGameOver() !== undefined ) { return this._isGameOver(); }
    var turn = (this._moves.checkTurn() === true) ? "X" : "O";
    var movesToCheck = (this._moves.checkTurn() === true) ? this._moves.getXMoves() : this._moves.getOMoves();
    if (this._isWinner(movesToCheck) === true) { return turn + " is the winner!";}
  },

  _isGameOver: function() {
    if (this._moves.getRemainingMoves().length === 0) { return "Game Over" ;}
  },

  _isWinner: function(movesToCheck) {
    var gotAWinner;
    this._winners.forEach(function (winner) {
      for (var i = 0; i < winner.length;) {
        winningMoves = [];
        for (var j = 0; j < movesToCheck.length; ) {
          if (winner[i] < movesToCheck[j]) {
            ++i;
          } else if (winner[i] == movesToCheck[j]) {
            winningMoves.push(movesToCheck[i]);
            if (winningMoves.length === 3) { gotAWinner = true; }
            ++i; ++j;
          } else {
            return false;
          }
        }
      }
    });
    return gotAWinner;
 }
};
