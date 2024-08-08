// Promise.resolve().then和Promise.resolve().catch方法如果没报错则返回的是一个新的resolved状态的Promise实例
// 报错则返回reject状态的实例
// 输出1 3
Promise.resolve().then(() => {
    console.log(1)
    // 此处reject 去执行最后一个catch，输出3
    throw new Error("error1")
}).then(() => {
    console.log(2)
}).catch(() => {
    console.log(3)
})
