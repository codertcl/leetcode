// 将要执行的方法(this)临时添加到要指向的对象上，获得结果后，删除方法，返回结果
Function.prototype.myCall = function (context, ...args) {
    // context为要指向的对象
    // 首先检查函数调用的上下文，如果context为null或undefined，将其替换为全局对象，为基本数据类型时，则将其包装为对象类型
    context = context ? Object(context) : globalThis;

    // 生成一个唯一的属性名，避免与目标对象上可能存在的属性冲突
    const uniquePropertyName = Symbol();

    // 将当前函数作为目标对象的一个临时属性
    context[uniquePropertyName] = this;

    // 使用目标对象调用这个临时属性，传入参数
    const result = context[uniquePropertyName](...args);

    console.log(context, context[uniquePropertyName], args)
    // 清除临时属性，避免污染目标对象
    delete context[uniquePropertyName];

    // 返回函数调用的结果
    return result;
};


const obj = {
    value: 42,
    showValue: function (...args) {
        console.log(args, this.value);
    }
};

// 使用 myCall 方法调用 showValue 函数，绑定 this 为 obj
obj.showValue.myCall(obj); // 输出：[] 42

// 使用不同的上下文调用 showValue 函数
obj.showValue.myCall({value: 21}, 1, 2); // 输出：[1, 2] 21