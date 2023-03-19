const floodFill = (image, sr, sc, newColor) => {
  const m = image.length;
  const n = image[0].length;
  const oldColor = image[sr][sc];
  if (oldColor == newColor) return image;

  const fill = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
      return;
    }
    image[i][j] = newColor;
    fill(i - 1, j);
    fill(i + 1, j);
    fill(i, j - 1);
    fill(i, j + 1);
  };

  fill(sr, sc);
  return image;
};

const floodFill = (image, sr, sc, newColor) => {
  const m = image.length;
  const n = image[0].length;
  const oldColor = image[sr][sc];

  if (oldColor == newColor) return image;

  const queue = [[sr, sc]];

  while (queue.length) {
    const [i, j] = queue.shift();
    image[i][j] = newColor;

    if (i - 1 >= 0 && image[i - 1][j] == oldColor) queue.push([i - 1, j]);
    if (i + 1 < m && image[i + 1][j] == oldColor) queue.push([i + 1, j]);
    if (j - 1 >= 0 && image[i][j - 1] == oldColor) queue.push([i, j - 1]);
    if (j + 1 < n && image[i][j + 1] == oldColor) queue.push([i, j + 1]);
  }

  return image;
};
