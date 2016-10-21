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
    var turn = (this._moves.checkTurn() === true) ? "X" : "O";
    var result = this._isWinner(this._movesToCheck(turn));
    if (result === true) { return turn + " is the winner!";}
    if (this._isGameOver() !== undefined ) { return this._isGameOver(); }
  },

  _movesToCheck: function (turn) {
    var theMoves = (turn === "X") ? this._moves.getXMoves() : this._moves.getOMoves();
    return theMoves.sort();
  },

  _isGameOver: function() {
    if (this._moves.getRemainingMoves().length === 0) { return "Game Over" ;}
  },

  _isWinner: function(movesToCheck) {
    var gotAWinner;
    this._winners.forEach(function (winner) {
      var i, j;
      winningMoves = [];
      for (i = 0, j = 0; i < winner.length && j < movesToCheck.length;) {
          if (winner[i] < movesToCheck[j]) {
            i++;
          } else if (winner[i] == movesToCheck[j]) {
            winningMoves.push(movesToCheck[i]);
            if (winningMoves.length === 3) { gotAWinner = true; }
            i++; j++;
          } else {
            return false;
          }
      }
    });
    return gotAWinner;
 }
};
