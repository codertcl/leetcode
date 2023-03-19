var sortArrayByParity = function (A) {
  return A.sort((a, b) => (a & 1) - (b & 1));
};

var sortArrayByParity = function (A, l = 0, r = A.length - 1) {
  while (l !== r) {
    while (r > 0 && A[r] & 1) r--;
    while (l < r && (A[l] & 1) === 0) l++;
    [A[l], A[r]] = [A[r], A[l]];
  }
  return A;
};
