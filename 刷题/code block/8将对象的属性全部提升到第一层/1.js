function flattenObject(obj) {
    let flattened = {};

    function helper(obj, prefix = "") {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const val = obj[key]
                if (
                    typeof val === "object" && val !== null && !Array.isArray(val) &&
                    !(val instanceof Map) && !(val instanceof Set) && !(val instanceof RegExp) &&
                    !(val instanceof Date) && !(val instanceof Error)
                ) {
                    helper(val, prefix + key + ".")
                } else {
                    flattened[prefix + key] = val;
                }
            }
        }
    }

    helper(obj)
    return flattened;
}

// 示例用法
let obj = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3
        }
    },
    f: [4, 5, 6],
    g: '',
    h: null,
    m: Symbol(1),
    n: new Date(),
    o: new RegExp(),
    q: new Map([['a', 1]]),
    k: new Set([1, 2, 3]),
    l: () => {
    },
    t: null,
    s: undefined,
    p: new Error(),
};

let flattenedObj = flattenObject(obj);
console.log(flattenedObj);
