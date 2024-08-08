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
