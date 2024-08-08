// 首先会对1调用Promise.resolve封装为一个Promise对象
// 然后await相当于执行Promise.then()
// 所以直接输出1
// 3、await 跟非Promise值，则直接返回值
const res = await 1
console.log(res) //
