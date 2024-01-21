var isNumber = function (s) {
  const graph = {
    //点和边构成的临接表
    0: { blank: 0, sign: 1, ".": 2, digit: 6 },
    1: { digit: 6, ".": 2 },
    2: { digit: 3 },
    3: { digit: 3, e: 4 },
    4: { digit: 5, sign: 7 },
    5: { digit: 5 },
    6: { digit: 6, ".": 3, e: 4 },
    7: { digit: 5 },
  };

  let state = 0; //初始状态

  for (let c of s.trim()) {
    //循环字符串
    if (c >= "0" && c <= "9") {
      c = "digit";
    } else if (c === " ") {
      c = "blank";
    } else if (c === "+" || c === "-") {
      c = "sign";
    }

    state = graph[state][c]; //返回下一个状态

    if (state === undefined) {
      //状态转移之后不在临接表中 返回false
      return false;
    }
  }

  if (state == 3 || state == 5 || state == 6) {
    //状态是3、5、6中的一个说明是有效数字
    return true;
  }

  return false;
};

