setTimeout(()=>{
    // 1、下面全部加入到宏任务队列
    console.log("s1")
    new Promise(((resolve, reject) => {
        console.log("p1");
    }))
},0)

new Promise((resolve, reject) => {
    // 2、下面全部加入到微任务队列
    console.log("p2")
    setTimeout(()=>{
        console.log("s2")
    },0)
})

// 3、没有同步任务，所以开始执行微任务。先输出p2
// 4、将输出s2的任务添加到宏任务队列中，此时微任务也执行完了
// 5、开始执行最先加入的宏任务，输出s1
// 6、将打印p1的任务加入到微任务队列
// 7、此时同步任务执行完了，继续执行微任务，输出p1
// 8、执行最后的同步任务，输出s2
// p2  s1  p1  s2