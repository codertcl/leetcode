var setZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let flagCol0 = false,
    flagRow0 = false; //表示第一行和第一列有没有0
  for (let i = 0; i < m; i++) {
    //寻找第一列是否存在0
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      flagRow0 = true;
    }
  }
  for (let i = 1; i < m; i++) {
    //循环矩阵，如果遇见0，将和这个网格相同的第一行和第一列的元素标记成0
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    //循环矩阵，如果当前网格对应的第一行和第一列是0，则将这个单元格置为0
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (flagCol0) {
    //如果第一列有0 ，则将这第一列全部置为0
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (flagRow0) {
    //如果第一行有0 ，则将这第一行全部置为0
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};
