function Game() {
  this._winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this._remainingMoves = [1,2,3,4,5,6,7,8,9];
}

Game.prototype.getWinners = function() {
  return this._winners;
};

Game.prototype.getRemainingMoves = function() {
  return this._remainingMoves;
};
