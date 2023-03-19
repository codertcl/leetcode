var solveSudoku = function(board) {
  function isValid(row, col, val, board) {
      let len = board.length
      // 行中的数字不能重复
      for(let i = 0; i < len; i++) {
          if(board[row][i] === val) {
              return false
          }
      }
      // 列中的数字不能重复
      for(let i = 0; i < len; i++) {
          if(board[i][col] === val) {
              return false
          }
      }
      let startRow = Math.floor(row / 3) * 3
      let startCol = Math.floor(col / 3) * 3

      //方块中的数字不能重复
      for(let i = startRow; i < startRow + 3; i++) {
          for(let j = startCol; j < startCol + 3; j++) {
              if(board[i][j] === val) {
                  return false
              }
          }
      }

      return true
  }

  function backTracking() {//回溯函数
      for(let i = 0; i < board.length; i++) {
          for(let j = 0; j < board[0].length; j++) {//循环行和列
              if(board[i][j] !== '.') continue
              for(let val = 1; val <= 9; val++) {//尝试在当前单元格放置1-9
                  if(isValid(i, j, `${val}`, board)) {//判断放置数字的合法性
                      board[i][j] = `${val}`//放置数字
                      if (backTracking()) {//合法返回ture
                          return true
                      }
                      
                      board[i][j] = `.`//不合法回溯状态
                  }
              }
              return false//1-9的数字都不合法，返回false
          }
      }
      return true//全部可能性都尝试完成 返回true 说明有解
  }
  backTracking()
  return board
  
};