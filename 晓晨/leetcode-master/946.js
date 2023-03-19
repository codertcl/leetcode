const validateStackSequences = (pushed, popped) => {
  const stack = []; //用栈模拟出栈入栈的过程
  let index = 0;
  const len = pushed.length;
  for (let i = 0; i < len; i++) {
    stack.push(pushed[i]);
    //当popped中index指向的位置的元素和stack栈顶的元素一致时，出栈 并且 index++
    while (popped[index] !== undefined && popped[index] === stack[stack.length - 1]) {
      stack.pop();
      index++;
    }
  }
  return !stack.length; //最后判断stack是否为空
};
