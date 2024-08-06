function deepClone(obj, map = new WeakMap()) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Map) return new Map([...obj]);
    if (obj instanceof Set) return new Set([...obj]);
    if (obj instanceof Error) return new Error(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    if (typeof obj === "symbol") return Symbol(obj.description);

    if (map.has(obj)) {
        return map.get(obj);
    }

    let newObj = Array.isArray(obj) ? [] : {};

    map.set(obj, newObj)
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key], map)
        }
    }

    // 对Symbol的key进行特殊的处理
    //  在给定对象自身上找到的所有 Symbol 属性的数组
    const symbolKeys = Object.getOwnPropertySymbols(obj)
    for (const sKey of symbolKeys) {
        const newSKey = Symbol(sKey.description)
        newObj[newSKey] = deepClone(obj[sKey])
    }

    return newObj
}

const s1 = Symbol()
const s2 = Symbol("11")
var obj = {
    id: 1,
    hobbies: {
        hobby1: '1',
        hobby2: '2'
    },
    msg: {
        age: 18
    },
    color: ['red', 'pink'],
    say: function () {
        console.log('say')
    },
    regexp: '/0+/',
    undef: undefined,
    nu: null,
    date: new Date(),
    nan: NaN,
    inf: Infinity,
    [s1]: "abc",
    s2: s2,//正常
    set: new Set(["aaa", "bbb", "ccc"]),
    map: new Map([["aaa", "abc"], ["bbb", "cba"]]),
    err: new Error('error message'),
}
obj.obj = obj
var o = deepClone(obj);
console.log(o)
