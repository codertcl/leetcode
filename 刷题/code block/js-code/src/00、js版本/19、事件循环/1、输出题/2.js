// 1. 执行同步任务输出1
console.log(1)

const p = new Promise((resolve, reject) => {
    // 2. 执行同步任务输出2
    console.log(2)
    resolve()
})
// 4. 执行同步任务输出3
console.log(3)

setTimeout(() => {
    // 6. 加入到宏任务队列中
    console.log(4)
}, 1000)

p.then(() => {
    // 3.加入到微任务队列中
    console.log(5)
})

setTimeout(() => {
    // 7. 加入到宏任务队列中
    console.log(6)
}, 1000)

// 5. 执行同步任务输出7
console.log(7)
// 1 2 3 7 5 4 6