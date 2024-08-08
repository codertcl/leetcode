async function f () {
    // 相当于执行了return Promise.resolve(100)
    return 100;
}

const res = f()
console.log(res)
res.then((res) => {
    console.log(res); // 100
})
