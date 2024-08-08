// try catch相当于Promise.reject捕获错误

const p = Promise.reject("error")

try {
    const res = await p;
    console.log("res", res)
} catch (e) {
    console.log('error', e)
}
