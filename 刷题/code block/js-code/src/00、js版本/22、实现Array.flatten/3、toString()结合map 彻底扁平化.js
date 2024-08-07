function fun(arr) {
    console.log(arr.toString())
    return arr.toString().split(',').map(function (item) {
        return Number(item);
    })
}

console.log(fun([1, [2, 3, [4]]])) // [1, 2, 3, 4]
