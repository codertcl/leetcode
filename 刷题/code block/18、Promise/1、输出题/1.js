////1：首先进入Promise构造函数中 先输出1 将resolve加入到任务队列中 再输出2 此时输出4 等执行栈任务执行完后再来将任务队列中任务加入执行栈并调用，最后输出3
////1243
const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
})
promise.then(() => {
    console.log(3)
})
console.log(4);