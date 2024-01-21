//方法1
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];//备份的队列
};

MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

MyStack.prototype.pop = function() {
  	// 减少两个队列交换的次数， 只有当queue1为空时，交换两个队列
    if(!this.queue1.length) {
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    while(this.queue1.length > 1) {//当队列1的元素数量大于1的时候不断将元素push进备份队列
        this.queue2.push(this.queue1.shift());
    }
    return this.queue1.shift();//最后将队列1最后一个元素出队
};

MyStack.prototype.top = function() {
    const x = this.pop();//查看栈顶，队列出队，然后在push进队列1
    this.queue1.push(x);
    return x;
};

MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length;
};


//方法2
var MyStack = function() {
    this.queue = [];
};

MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

MyStack.prototype.pop = function() {
    let size = this.queue.length;
    while(size-- > 1) {//将除了最后一个元素外的元素全部加入到队尾。
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

MyStack.prototype.top = function() {
    const x = this.pop();//先出栈，然后在加入队列
    this.queue.push(x);
    return x;
};

MyStack.prototype.empty = function() {
    return !this.queue.length;
};



