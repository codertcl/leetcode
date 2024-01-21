function countBattleships(board) {
  const lenX = board.length,
    lenY = board[0].length;
  let count = 0;
  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      //左边和上面不是X 则时船头Ï
      if (board[i][j] === "X") {
        if (board[i][j] == "X" && (i == 0 || board[i - 1][j] == ".") && (j == 0 || board[i][j - 1] == ".")) {
          ++count;
        }
      }
    }
  }
  return count;
}
