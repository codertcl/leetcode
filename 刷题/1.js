// 6.generator和Promise一起来使用
function* bar() {
    console.log("1111");
    const result = yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Generator");
        }, 1000);
    });
    console.log(result);//Hello Generator 如果下面的第二次next不传res则为undefined
}

const it = bar();
//it.next()为对象,包含value(promise对象)和done
it.next().value.then(res => {
    console.log(res)//不论下面的next是否传res 都会输出resolve的参数Hello Generator
    // //第一次next时,执行了输出111和创建了Promise对象
    // //所以要再次调用next()函数
    // it.next() //bar的result输出即为undefined
    // next传递的参数就会被当作上一个yield表达式的返回值 此处即bar的result被赋值为res('Hello Generator')
    it.next(res)
})