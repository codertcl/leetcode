var validateStackSequences = function(pushed, popped) {
    const stack = [];
    const n = pushed.length;
    for (let i = 0, j = 0; i < n; i++) {
        stack.push(pushed[i]);
        while (stack.length && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))//true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))//false [1,2]