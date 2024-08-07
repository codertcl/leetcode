// 1. 执行同步任务输出1
console.log(1)
const p = new Promise((resolve, reject) => {
    // 2. 执行同步任务输出2
    console.log(2)
    resolve()
})
// 5. 执行同步任务输出3
console.log(3)

setTimeout(() => {
    // 6. 加入到宏任务队列中
    console.log(4)
}, 1000)

p.then(() => {
    // 3.加入到微任务队列中
    console.log(5);
    Promise.resolve().then(function () {
        // 4.加入到微任务队列中
        console.log(6)
    })
})

setTimeout(() => {
    // 7. 加入到宏任务队列中
    console.log(7)
}, 1000)

// 7. 执行同步任务输出8
console.log(8)
// 1  2  3  8  5  6  4  7