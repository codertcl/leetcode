const compose = (...fns) => {
    if (fns.length === 0) {
        return arg => arg;
    }

    if (fns.length === 1) {
        return fns[0];
    }

    return fns.reduce((prev, cur) => (...args) => prev(cur(...args)))
}
// 示例用法
const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;
const subtract10 = (x) => x - 10;

const composedFunction = compose(subtract10, multiplyBy2, add5);
console.log(composedFunction(3)) // 输出 6 ((3 + 5) * 2 - 10)
