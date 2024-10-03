class MyPromise {
    state = "pending";
    value = undefined;
    reason = undefined;
    resolvedCallbacks = [];
    rejectedCallbacks = [];

    constructor(fn) {
        const resolvedHandlers = (value) => {
            setTimeout(() => {
                if (this.state === "pending") {
                    this.state = "fulfilled";
                    this.value = value;
                    this.resolvedCallbacks.forEach((callback) => {
                        callback && callback(value)
                    })
                }
            })
        }
        const rejectedHandlers = (reason) => {
            setTimeout(() => {
                if (this.state === "pending") {
                    this.state = "rejected";
                    this.reason = reason;
                    this.rejectedCallbacks.forEach((callback) => {
                        callback && callback(reason)
                    })
                }
            })
        }
        try {
            fn(resolvedHandlers, rejectedHandlers)
        } catch (e) {
            rejectedHandlers(e)
        }
    }

    then(fn1, fn2) {
        fn1 = typeof fn1 === "function" ? fn1 : (value) => value
        fn2 = typeof fn2 === "function" ? fn2 : (reason) => reason
        return new MyPromise((resolve, reject) => {
            if (this.state === "pending") {
                try {
                    this.resolvedCallBacks.push(() => resolve(fn1(this.value)))
                } catch (e) {
                    reject(e)
                }
                try {
                    this.rejectedCallBacks.push(() => reject(fn2(this.reason)))
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

}