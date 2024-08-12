class MyPromise {
    state = "pending";
    value = undefined
    reason = undefined;
    resolvedCallbacks = [];
    rejectedCallbacks = [];

    constructor(fn) {
        const resolvedHandlers = (value) => {
            // 加 setTimeout ，参考 https://coding.imooc.com/learn/questiondetail/257287.html (2022.01.21)
            // 因为 Promise 是一个底层实现的微任务，而我们没法通过其他的 API 去实现 Promise 微任务，只能通过 setTimeout 来模拟一个异步
            setTimeout(() => {
                if (this.state === "pending") {
                    this.state = "fulfilled";
                    this.value = value;
                    this.resolvedCallbacks.forEach(callback => {
                        callback && callback(value)
                    })
                }
            })
        }

        const rejectedHandlers = (reason) => {
            // 加 setTimeout ，参考 https://coding.imooc.com/learn/questiondetail/257287.html (2022.01.21)
            // 因为 Promise 是一个底层实现的微任务，而我们没法通过其他的 API 去实现 Promise 微任务，只能通过 setTimeout 来模拟一个异步
            setTimeout(() => {
                if (this.state === "pending") {
                    this.state = "rejected";
                    this.reason = reason;
                    this.rejectedCallbacks.forEach(callback => {
                        callback && callback(reason)
                    })
                }
            })
        }

        try {
            fn(resolvedHandlers, rejectedHandlers);
        } catch (e) {
            rejectedHandlers(e);
        }
    }

    then(fn1, fn2) {
        fn1 = typeof fn1 === "function" ? fn1 : (value => value);
        fn2 = typeof fn2 === "function" ? fn2 : (reason => reason);
        return new MyPromise((resolve, reject) => {
            if (this.state === "pending") {
                try {
                    this.resolvedCallbacks.push(() => {
                        resolve(fn1(this.value))
                    })
                    this.rejectedCallbacks.push(() => {
                        reject(fn2(this.reason))
                    })
                } catch (e) {
                    reject(e)
                }
            } else if (this.state === "fulfilled") {
                try {
                    resolve(fn1(this.value))
                } catch (e) {
                    reject(e)
                }
            } else {
                try {
                    reject(fn2(this.reason))
                } catch (e) {
                    reject(e)
                }
            }
        })
    }

    catch (fn) {
        return this.then(null, fn)
    }
}
MyPromise.resolve = function (value) {
    return new MyPromise((resolve, reject) => {
        return resolve(value)
    })
}

MyPromise.resolve = function (value) {
    return new MyPromise((resolve, reject) => {
        return resolve(value)
    })
}
