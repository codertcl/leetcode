function MyInstance(instance, origin) {
    if (!instance || (typeof instance !== "object" && typeof instance !== "function")) {
        return false;
    }
    let proto = instance.__proto__;
    while (proto) {
        if (proto === origin.prototype) return true;
        proto = proto.__proto__;
    }
    return false;
}

console.log(function () {} instanceof Object) // true
console.log(function () {} instanceof Function) // true
console.log(MyInstance(1, Number))// false
console.log(MyInstance(function () {}, Function)) // true
console.log(MyInstance(function () {}, Object)) // true
console.log(MyInstance([], Array)) // true
console.log(MyInstance({}, Object)) // true
console.log(MyInstance([], Object))// true
console.log(MyInstance(new Map(), Object))// true
console.log(MyInstance(new Set(), Object))// true
