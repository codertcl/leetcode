// 如果有多个fulfilled promise实例，同时执行then链式调用：then会交替执行。这是编译器的优化，防止一个promise占据太久时间。
// then中返回一个promise实例，相当于多出一个promise实例，也会遵守交替执行（但和直接声明一个promise实例，结果有些差异的）
//  then中返回promise实例，会出现“慢两拍”的效果原因如下
//     第一拍：promise需要由pending变为fulfilled
//     第二拍：then函数挂载到微任务队列
Promise.resolve().then(() => {
    console.log(0)
    return Promise.resolve(4)
}).then((res) => {
    console.log(res)
    return Promise.resolve(6)
}).then((res) => {
    console.log(res)
})
Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(7)
})
