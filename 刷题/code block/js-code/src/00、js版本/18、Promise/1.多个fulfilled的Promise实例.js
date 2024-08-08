// 如果有多个fulfilled promise实例，同时执行then链式调用：then会交替执行。这是编译器的优化，防止一个promise占据太久时间。
Promise.resolve().then(() => {
    console.log(0)
}).then(() => {
    console.log(2)
}).then((res) => {
    console.log(4)
}).then((res) => {
    console.log(6)
})
Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(7)
}).then(() => {
    console.log(8)
})
