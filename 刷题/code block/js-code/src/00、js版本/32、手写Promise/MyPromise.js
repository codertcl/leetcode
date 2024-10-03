class MyPromise {

    state = "pending"; // 状态
    value = undefined; // 成功后的值
    reason = undefined; // 失败的原因

    resolvedCallBacks = []; // pending状态下存储成功的回调函数
    rejectedCallBacks = []; // pending状态下存储失败的回调函数
    constructor(fn) {
        const resolvedHandlers = (value) => {
            // 加 setTimeout ，参考 https://coding.imooc.com/learn/questiondetail/257287.html (2022.01.21)
            // 因为 Promise 是一个底层实现的微任务，而我们没法通过其他的 API 去实现 Promise 微任务，只能通过 setTimeout 来模拟一个异步
            setTimeout(() => {
                if (this.state === "pending") {
                    this.state = "fulfilled";
                    this.value = value;
                    this.resolvedCallBacks.forEach(callback => {
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
                    this.rejectedCallBacks.forEach(callback => {
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

    // 返回新的Promise
    then(fn1, fn2) {
        // 如果没有传入成功和失败的回调函数，默认成功和失败的回调函数为value和reason
        fn1 = typeof fn1 === "function" ? fn1 : (value => value);
        fn2 = typeof fn2 === "function" ? fn2 : (reason => reason);
        // pending状态下，两个回调函数会被分别存储到resolvedCallBacks和rejectedCallBacks中
        return new MyPromise((resolve, reject) => {
            if (this.state === "pending") {
                this.resolvedCallBacks.push(() => {
                    try {
                        resolve(fn1(this.value));
                    } catch (e) {
                        reject(e)
                    }
                })
                this.rejectedCallBacks.push(() => {
                    try {
                        reject(fn2(this.reason));
                    } catch (e) {
                        reject(e)
                    }
                })
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

    catch(fn) {
        return this.then(null, fn)
    }

    finally(callback) {
        return this.then(callback, callback)
    }
}

MyPromise.resolve = (value) => {
    return new MyPromise((resolve, reject) => {
        resolve(value)
    })
}


MyPromise.reject = (reason) => {
    return new MyPromise((resolve, reject) => {
        reject(reason)
    })
}

MyPromise.all = (promisesList) => {
    return new MyPromise((resolve, reject) => {
        const res = [];// 存储Promise的结果
        let resolvedCount = 0; // resolved的数量
        promisesList.forEach(p => {
            p.then(data => {
                res.push(data);
                resolvedCount++;
                if (resolvedCount === promisesList.length) {
                    resolve(res)
                }
            }, err => {
                reject(err)
            })
        })
    })
}

MyPromise.race = (promisesList) => {
    let resolved = false // 标记
    return new MyPromise((resolve, reject) => {
        promisesList.forEach(p => {
            p.then(res => {
                if (!resolved) {
                    resolve(res)
                    resolved = true
                }
            }, err => {
                reject(err)
            })
        })
    })
}

MyPromise.allSettled = (promisesList) => {
    return new MyPromise((resolve, reject) => {
        const res = [];// 存储Promise的结果
        let count = 0; // 状态变更的数量
        promisesList.forEach(p => {
            p.then(data => {
                res.push(data);
                count++;
                if (count === promisesList.length) {
                    resolve(res)
                }
            }, err => {
                res.push(err);
                count++;
                if (count === promisesList.length) {
                    resolve(res)
                }
            })
            //     .finally(() => {
            //     count++;
            //     if (count === promisesList.length) {
            //         resolve(res)
            //     }
            // })
        })
    })
}

MyPromise.any = (promisesList) => {
    let flag = false // 标记
    return new MyPromise((resolve, reject) => {
        const rejectRes = [];// 存储reject Promise的结果
        let count = 0; // rejected状态变更的数量
        promisesList.forEach(p => {
            p.then(res => {
                if (!flag) {
                    // 一个resolve就resolved
                    resolve(res)
                }
            }, err => {
                // 全部reject才rejected
                rejectRes.push(err);
                count++;
                if (count === promisesList.length) {
                    reject(rejectRes)
                }
            })
        })
    })
}
