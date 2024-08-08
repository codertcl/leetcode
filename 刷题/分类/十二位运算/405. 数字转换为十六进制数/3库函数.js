var toHex = function (num) {
    //右移 >>> 0 可以解决负数补码展示的问题
    return (num>>>0).toString(16)
};
console.log(toHex(12))
console.log(toHex(5))
console.log(toHex(-5))
