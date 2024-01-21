var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  let prev2 = 0;
  let prev1 = 1;
  let result = 0;
  for (let i = 2; i <= N; i++) {
    result = prev1 + prev2;
    prev2 = prev1;
    prev1 = result;
  }
  return result;
};
