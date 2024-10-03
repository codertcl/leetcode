Object.prototype[Symbol.iterator] = function () {
    console.log(this, Object.values(this), Symbol.iterator, Object.values(this)[Symbol.iterator])
    return Object.values(this)[Symbol.iterator]()
}
var [a, b] = {a: 1, b: 2}
console.log(a,b);
