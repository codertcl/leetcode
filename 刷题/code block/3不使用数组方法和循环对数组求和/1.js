const arr = [1, 2, 3, 4, 5]

function sum (arr) {
    if (arr.length) {
        const [first, ...rest] = [...arr];
        return first + sum(rest);
    } else {
        return 0
    }
}

console.log(sum(arr));// 15
