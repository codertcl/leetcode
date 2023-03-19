var RecentCounter = function () {
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t); //新请求入队
  const time = t - 3000; //计算3000ms前的时间
  while (this.queue[0] < time) {
    //如果队头元素请求的时间在[t-3000,t]之外 就不断出队
    this.queue.shift();
  }
  return this.queue.length; //在[t-3000,t]区间内队列剩余的元素就是符合要求的请求数
};
