Array.prototype.flatten = function () {
    return (this || []).reduce((prev, cur) => prev.concat(cur), [])
}

console.log([1, [2, 3, [4]]].flatten()) // [1, 2, 3, [4]]]
console.log([1, [[2, 3], [4]]].flatten()) // [1, [2, 3], [4]]]