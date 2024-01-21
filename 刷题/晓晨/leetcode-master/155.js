var MinStack = function () {
  this.stack = [];
  this.min_stack = [Infinity];
};

//stack正常push，min_stack只会push需要入栈和栈顶中较小的元素
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

//stack正常pop，min_stack正常pop
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min_stack.pop();
};

//返回stack栈顶元素
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

//返回min_stack栈顶元素
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
};
