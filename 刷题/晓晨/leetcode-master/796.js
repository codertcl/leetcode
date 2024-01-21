var rotateString = function (A, B) {
  return A.length <= B.length && (A + A).includes(B);
};
