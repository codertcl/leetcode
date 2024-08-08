function f1 (x) {
    x = 100;
}

let x = 10;
f1(x);
console.log(x); // 10

//
function f2 (obj) {
    // 这行代码创建了一个新的对象 { x: 100 }，并将 obj 的引用指向这个新对象。
    // 重要的是理解这里创建的是一个新的局部变量 obj，它仅在 f2 函数的作用域内有效
    obj = {
        x: 100
    };
}

function f3 (obj) {
    obj.x = 100;
}

let obj = {
    x: 10
};
f2(obj);
console.log(obj); // { x: 10 } obj不变

f3(obj);
console.log(obj); // { x: 100 } obj改变
