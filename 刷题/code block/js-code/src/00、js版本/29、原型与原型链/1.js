function Foo() {
    Foo.a = function () {
        console.log(1)
    }
    this.a = function () {
        console.log(2)
    }
}

Foo.prototype.a = function () {
    console.log(3)
}
Foo.a = function () {
    console.log(4)
}

Foo.a(); // 4
let obj = new Foo(); // {a: function}
obj.a(); // 执行构造函数内的a函数输出2
Foo.a(); // 执行构造函数，Foo.a被构造函数内的覆盖 输出1


class A {
    constructor() {
    }
}
class B extends A{
    constructor() {
        super()
    }
}
// B.prototype.__proto__指向原型链上上一级对象的原型对象，此处指向父类的原型对象
console.log(B.prototype.__proto__ === B.prototype) // false
console.log(B.prototype.__proto__ === A.prototype) // true
// 如果B没有继承A，则下面的表达式结果为true
console.log(B.prototype.__proto__ === Object.prototype) // false
