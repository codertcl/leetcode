// 1. 执行同步任务输出1
console.log(1);
new Promise((resolve, reject) => {
    // 2. 执行同步任务输出2
    console.log(2);
    resolve()
})
    .then(() => {
        // 3、下面全部加入到微任务队列
        console.log(3);
        setTimeout(() => {
            console.log(4);
        }, 0)
    })
setTimeout(() => {
    // 4、下面全部加入到微任务队列
    console.log(5);
    setTimeout(() => {
        console.log(6);
    }, 0)
}, 0)
// 4. 执行同步任务输出7
console.log(7);


// 5、没有同步任务，所以开始执行微任务。先输出3
// 4、将输出4的任务添加到宏任务队列中，此时微任务也执行完了
// 5、开始执行最先加入的宏任务，输出5
// 6、将打印6的任务加入到宏任务队列
// 7、此时同步任务和微任务执行完了，继续执行宏任务，输出4
// 8、执行最后的下一个宏任务，输出6
// 1  2  7  3  5  4  6