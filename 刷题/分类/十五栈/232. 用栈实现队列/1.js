var MyQueue = function () {
    //准备两个栈
    this.stack1 = [];//输入栈
    this.stack2 = [];//输出栈
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    //输出栈2有元素 则直接返回栈顶元素，由于栈2元素是栈1分别从pop进来的
    //所以栈2栈底的元素就是后进队列的元素，栈顶的元素就是先进队列的元素,在执行pop就实现了队列先进先出的效果
    if (this.stack2.length) return this.stack2.pop()
    while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const x = this.pop();//查看队头的元素 复用pop方法，然后在让元素push进输出栈
    this.stack2.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()
console.log(param_2)//1
console.log(param_3)//2
console.log(param_4)//false