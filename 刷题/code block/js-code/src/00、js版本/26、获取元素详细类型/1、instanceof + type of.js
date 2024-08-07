function getType(item) {
    /* 1、枚举 容易易漏，不便更新*/
    if (item === null) return "null";
    if (typeof item !== "object") return typeof item;
    if (item instanceof Map) return "Map";
    if (item instanceof Set) return "Set";
    if (item instanceof Date) return "Date";
    if (item instanceof RegExp) return "RegExp";
    if (item instanceof Array) return "Array";
    return "object";
}

console.log(getType(true))  // "boolean"
console.log(getType(NaN)) // "number"
console.log(getType(Infinity)) // "number"
console.log(getType(-Infinity)) // "number"
console.log(getType(Number.MAX_SAFE_INTEGER)) // "number"
console.log(getType("")) // "string"
console.log(getType(1)) // "number"
console.log(getType(new WeakSet())) // "weakset"
console.log(getType(new Set())) // "set"
console.log(getType(new Map())) // "map"
console.log(getType(new WeakMap())) // "weakmap"
console.log(getType([])) // "array"
console.log(getType({})) // "object"
console.log(getType(null))// "null"
console.log(getType(undefined))// "undefined"
console.log(getType(new Error())) // "error"
console.log(getType(new RegExp(/^/))) // "regExp"
console.log(getType(new Date())) // "date"
console.log(getType(Symbol()))  // "symbol"
console.log(getType(BigInt(11))) // "bigInt"
console.log(getType(function () {})) // "function"
console.log(getType(Promise.resolve())) // "promise"