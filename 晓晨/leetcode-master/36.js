var isValidSudoku = function (board) {
  // 方向判重
  let rows = {}; //行
  let columns = {}; //列
  let boxes = {}; //3*3小方块
  // 遍历数独
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num != ".") {
        //遇到有效的数字
        let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3); // 子数独序号
        if (rows[i + "-" + num] || columns[j + "-" + num] || boxes[boxIndex + "-" + num]) {
          //重复检测
          return false;
        }
        // 方向 + 数字 组成唯一键值，若出现第二次，即为重复
        // 更新三个方向
        rows[i + "-" + num] = true;
        columns[j + "-" + num] = true;
        boxes[boxIndex + "-" + num] = true;
      }
    }
  }
  return true;
};
