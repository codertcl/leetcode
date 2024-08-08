var findTheDifference = function (s, t) {
    let map1 = new Map()
    for (let i = 0; i < s.length; i++) {
        map1.set(s[i], (map1.has(s[i]) ? map1.get(s[i]) : 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        //不包括t[i]或者t[i]小于0
        if (!map1.has(t[i]) || map1.get(t[i]) < 0) return t[i]
        map1.set(t[i], map1.get(t[i]) - 1)
        if (map1.get(t[i]) < 0) return t[i]

    }
};
console.log(findTheDifference('abs', 'asb1'))
console.log(findTheDifference('', 'a'))
debugger
console.log(findTheDifference('a', 'aa'))
