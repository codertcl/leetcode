var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0, length = flowerbed.length; i < length; i++) {
    //当前位置是0，并且前后都不是1，考虑在最前和最后的特殊情况
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      count++;
      i++;
    }
  }
  return count >= n;
};
