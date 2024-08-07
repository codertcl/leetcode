Array.prototype.flatten = function () {
    let res = [];
    for (const item of this) {
        if (Array.isArray(item)) {
            /* 1、使用push*/
            res.push(...item.flatten())
            /* 2、使用concat*/
            // res = res.concat(item.flatten())
        } else {
            res.push(item);
        }
    }
    return res;
}

console.log([1, [2, 3, [4]]].flatten()) // [1, 2, 3, 4]
console.log([1, 3, [4, 6, 7, [5, 6, 7, 43, [23, 4]]]].flatten()); // [1, 3, 4,  6,  7,, 6, 7, 43, 23, 4]