function customNew(constructor, ...args) {
    // 创建一个空对象，继承constructor的原型
    const obj = Object.create(constructor.prototype);
    // 将obj作为this执行constructor，传入参数
    constructor.apply(obj, args);
    // 返回obj
    return obj;
}

function Foo(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
        return this.name;
    }
}

console.log(customNew(Foo, "111", 100))