function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(1)); // 输出1
console.log(memoizedFibonacci(2)); // 输出1
console.log(memoizedFibonacci(3)); // 输出2
console.log(memoizedFibonacci(4)); // 输出3
console.log(memoizedFibonacci(5)); // 输出5
console.log(memoizedFibonacci(6)); // 输出8
console.log(memoizedFibonacci(7)); // 输出13
console.log(memoizedFibonacci(8)); // 输出21
console.log(memoizedFibonacci(9)); // 输出34
console.log(memoizedFibonacci(10)); // 输出55
console.log(memoizedFibonacci(20)); // 输出6765
