var MinStack = function () {
    this.stack = []
    this.minStack = [Infinity]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    //保证栈顶是最小元素
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.pop()
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */