function timeoutPromise(requestFunc, time) {
    const timeout = new Promise((resolve) => {
        setTimeout(resolve, time);
    }).then(() => {
        throw new Error('Timeout!');
    })
    //下面promise.race()方法两个promise对象，谁的状态先改变 就将其返回值作为回调函数的参数
    return Promise.race([requestFunc, timeout]);
}