var findTheDifference = function (s, t) {
    let map1 = new Map()
    for (let i = 0; i < s.length; i++) {
        map1.set(s[i], (map1.has(s[i]) ? map1.get(s[i]) : 0) + 1)
    }
    let map2 = new Map()
    for (let i = 0; i < t.length; i++) {
        map2.set(t[i],  (map2.has(t[i]) ? map2.get(t[i]) : 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        if (!map1.has(t[i])) return t[i]
        if (map1.get(t[i]) !== map2.get(t[i])) return t[i]
    }
};
debugger
console.log(findTheDifference('abs', 'asb1'))
console.log(findTheDifference('', 'a'))
console.log(findTheDifference('a', 'aa'))
