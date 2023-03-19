var MyCircularQueue = function (k) {
  this.front = 0;
  this.rear = 0;
  this.max = k;
  this.list = Array(k);
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  } else {
    this.list[this.rear] = value;
    this.rear = (this.rear + 1) % this.max;
    return true;
  }
};

MyCircularQueue.prototype.deQueue = function () {
  let v = this.list[this.front];
  this.list[this.front] = undefined;
  if (v !== undefined) {
    this.front = (this.front + 1) % this.max;
    return true;
  } else {
    return false;
  }
};

MyCircularQueue.prototype.Front = function () {
  if (this.list[this.front] === undefined) {
    return -1;
  } else {
    return this.list[this.front];
  }
};

MyCircularQueue.prototype.Rear = function () {
  let rear = this.rear - 1;
  if (this.list[rear < 0 ? this.max - 1 : rear] === undefined) {
    return -1;
  } else {
    return this.list[rear < 0 ? this.max - 1 : rear];
  }
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.front === this.rear && !this.list[this.front];
};

MyCircularQueue.prototype.isFull = function () {
  return this.front === this.rear && !!this.list[this.front];
};
