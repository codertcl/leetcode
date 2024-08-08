class MyPromise {

    state = "pending"; // 状态
    value = undefined; // 成功后的值
    reason = undefined; // 失败的原因

    resolvedCallBacks = []; // pending状态下存储成功的回调函数
    rejectedCallBacks = []; // pending状态下存储失败的回调函数
    constructor(fn) {
        const resolveHandler = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.resolvedCallBacks.forEach((callback) => {
                    callback && callback(this.value)
                })
            }
        }
        const rejectHandler = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.reason = reason;
                this.rejectedCallBacks.forEach((callback) => {
                    callback && callback(this.reason)
                })
            }
        }

        try {
            fn(resolveHandler, rejectHandler)
        } catch (err) {
            rejectHandler(err)
        }
    }

    // 返回新的Promise
    then(fn1, fn2) {
        // 如果没有传入成功和失败的回调函数，默认成功和失败的回调函数为value和reason
        fn1 = typeof fn1 === "function" ? fn1 : (value => value);
        fn2 = typeof fn2 === "function" ? fn2 : (reason => reason);
        // pending状态下，两个回调函数会被分别存储到resolvedCallBacks和rejectedCallBacks中
        if (this.state === "pending") {
            return new MyPromise((resolve, reject) => {
                this.resolvedCallBacks.push(
                    () => {
                        try {
                            resolve(fn1(this.value));
                        } catch (e) {
                            reject(e)
                        }
                    })
                this.rejectedCallBacks.push(() => {
                    try {
                        resolve(fn2(this.reason));
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        } else if (this.state === "fulfilled") {
            return new MyPromise((resolve, reject) => {
                try {
                    resolve(fn1(this.value))
                } catch (e) {
                    reject(e)
                }
            });
        } else if (this.state === "rejected") {
            return new MyPromise((resolve, reject) => {
                try {
                    reject(fn2(this.reason))
                } catch (e) {
                    reject(e)
                }
            });
        }
    }

    catch(fn) {
        return this.then(null, fn)
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
    return new MyPromise((resolve, reject) => {
        promisesList.forEach(p => {
            p.then(res => {
                resolve(res)
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
    return new MyPromise((resolve, reject) => {
        const rejectRes = [];// 存储reject Promise的结果
        let count = 0; // rejected状态变更的数量
        promisesList.forEach(p => {
            p.then(data => {
                // 一个resolve就resolved
                resolve(res)
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
