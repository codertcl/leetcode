function curry(fn, currArgs) {
    // Function.length 属性指明函数的形参个数
    return function () {
        //递归调用时的参数拼接,将所有参数都存储在args数组中
        let args = [...arguments];

        // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
        if (currArgs !== undefined) {
            // currags为之前已经获取到的参数的数组 args为当前又重新调用的函数的参数 所以 currags应该在前
            args = currArgs.concat(args);
        }

        // 递归调用
        if (args.length < fn.length) {
            return curry(fn, args);
        }

        // 递归出口 将所有参数存到args数组中后作为传入函数的参数进行执行
        return fn.apply(null, args);
    }
}


function sum(a, b, c) {
    console.log(a + b + c);
}

const fn = curry(sum);
fn(1, 2, 3); // 6
fn(1, 2)(3); // 6
fn(1)(2, 3); // 6
fn(1)(2)(3); // 6