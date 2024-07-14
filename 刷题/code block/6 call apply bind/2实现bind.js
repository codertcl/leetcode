// Function.prototype.myBind = function (context) {
//     // 获取原函数
//     const originalFunction = this;
//
//     // 获取 bind 调用时传入的参数（除了第一个 this 指针以外）
//     const bindArgs = Array.from(arguments).slice(1);
//
//     // 返回一个新的函数
//     return function boundFunction(...args) {
//         // 合并 bind 时的参数和调用时的参数
//         const finalArgs = bindArgs.concat(args);
//
//         // 使用 apply 来调用原函数，确保 this 指向正确
//         return originalFunction.apply(context, finalArgs);
//     };
// };


Function.prototype.myBind = function (context) {
    // context是指向的对象
    // 获取原函数 即showValue
    const originalFunction = this;

    // 获取 bind 调用时传入的参数（除了第一个 this 指针以外）
    // arguments是bind时传入的参数集合，第一个参数是指向的对象，后面是一个个参数
    const bindArgs = Array.from(arguments).slice(1);

    // 返回一个新的函数
    return function boundFunction(...args) {
        // 合并 bind 时的参数和调用时的参数
        const finalArgs = bindArgs.concat(args);
        console.log(context)
        console.log(originalFunction);
        console.log(arguments);
        console.log(bindArgs, args, finalArgs)
        // 使用 apply 来调用原函数，确保 this 指向正确
        return originalFunction.apply(context, finalArgs);
    };
};

const value = 1;
const obj = {
    value: 42,
    showValue: function (...args) {
        console.log('a', args) // args 是所有参数的集合，包括bind和调用时传入的参数
        console.log(this.value);
    },
};

const boundShowValue = obj.showValue.myBind(obj, 1, 2);

setTimeout(() => {
    boundShowValue(3); // 输出：42
})
