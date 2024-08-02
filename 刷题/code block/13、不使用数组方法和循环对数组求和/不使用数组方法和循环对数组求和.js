const sum = (arr) => {
    if (arr.length === 1) return arr[0]
    const [first, ...last] = arr;
    return first + sum(last)
}
console.log(sum([1, 2, 3]))
console.log(sum([1, 2]))
console.log(sum([1]))

