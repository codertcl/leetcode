class EventBus {
    constructor() {
        this.events = {};
    }

    emit(eventName, ...args) {
        if (this.events[eventName]) {
            try {
                this.events[eventName].forEach((event) => {
                    event(...args);
                });
            } catch (error) {
                // 这里可以记录错误，或者抛出一个新的错误
                console.error(`Error occurred in listener for '${eventName}':`, error);
                // 可以选择抛出错误，让上层调用者处理
                // throw new Error(`Error in event '${eventName}' listeners`);
            }
        }
    }

    // 异步监听器
    // 对于异步监听器，你可能需要设计一个不同的接口来处理它们。
    // 以下是一个简化的示例，其中监听器返回一个 Promise，并且 emit 方法接受一个额外的回调函数来处理这些 Promise 的结果（包括错误）
    async asyncEmit(eventName, callback, ...args ) {
        if (this.events[eventName]) {
            try {
                const promises = this.events[eventName].map((event) => event(...args));
                const res = await Promise.all(promises);
                callback(res);
            } catch (error) {
                callback([], error);
                // 这里可以记录错误，或者抛出一个新的错误
                console.error(`Error occurred in listener for '${eventName}':`, error);
                // 可以选择抛出错误，让上层调用者处理
                // throw new Error(`Error in event '${eventName}' listeners`);
            }
        } else {
            callback([]);
        }
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    off(eventName, callback) {
        try {
            if (this.events[eventName]) {
                this.events[eventName] = this.events[eventName].filter((event) => {
                    event !== callback;
                });
            }
        } catch (error) {
            // 这里可以记录错误，或者抛出一个新的错误
            console.error(`Error occurred in listener for '${eventName}':`, error);
            // 可以选择抛出错误，让上层调用者处理
            // throw new Error(`Error in event '${eventName}' listeners`);
        }
    }

    // 类似于emit，但触发一次事件后，移除监听
    once(eventName, callback) {
        const wrapper = (...args) => {
            callback(...args);
            this.off(eventName, wrapper);
        };
        this.on(eventName, wrapper);
    };
}

const bus = new EventBus();
bus.on("fun1", (...args) => {
    console.log(...args, "fun1");
});
bus.on("fun2", (...args) => {
    console.log(...args, "fun2");
});
console.log(bus.events)
bus.emit("fun1", 1)
bus.emit("fun2", 2)
bus.emit("fun2", 22)
bus.off("fun2", (...args) => {
    console.log(...args, "fun1");
})
bus.emit("fun2", 22)
