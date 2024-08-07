const testCases = [
    {input: {}, expected: 1, map: new Map(), set: new Set()}, // 1
    {input: {a: 1, b: 2}, expected: 1}, // 2
    {input: {a: 1, b: {c: 2}}, expected: 2}, // 3
    {input: {a: 1, b: {c: 2, d: {e: 3, f: {g: 4}}}}, expected: 4}, // 5
    {input: {a: 1, b: {c: 2, d: {e: 3}}, f: 4}, expected: 3}, // 4
];
const getDepth = (obj) => {
    if (typeof obj !== "object" || obj === null) {
        // 如果不是对象
        return 0;
    }
    let maxDepth = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            maxDepth = Math.max(maxDepth, getDepth(obj[key]) + 1)
        }
    }
    return maxDepth;
}
for (const testCase of testCases) {
    console.log(getDepth(testCase));//
}
console.log(getDepth({}));// 0