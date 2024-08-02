import Vue from "vue";
/**
 * 单例的Message组件
 */
class SingletonMessage {
    static instance = null;

    constructor() {
        // 不允许当前类实例化
        throw new Error("this class can not called by new");
    }

    static show(options) {
        // 如果当前实例存在则什么事儿都可以不做了
        if (this.instance) {
            return;
        }
        let config;
        if (typeof options === "string") {
            config = {
                message: options,
                onClose: () => {
                    // 做一些清理工作
                    this.instance = null;
                },
            };
        } else {
            const { onClose, ...others } = options;
            config = {
                ...others,
                onClose: (...args) => {
                    // 处理额外的清理工作
                    this.instance = null;
                    // 处理默认的参数
                    typeof onClose === "function" && onClose.apply(this, args);
                },
            };
        }
        this.instance = Message(config);
    }

    static close() {
        if (!this.instance) {
            return;
        }
        this.instance.close();
    }
}

Vue.prototype.$singletonMessage = SingletonMessage;