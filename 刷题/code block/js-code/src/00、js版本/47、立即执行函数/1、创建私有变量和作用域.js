// 创建私有变量和作用域
// 避免变量污染
(function () {
    // 这里定义的变量是函数内部的局部变量
    var privateVariable = '这是一个私有变量';
    console.log(privateVariable);
})();
// 在函数外部无法直接访问privateVariable变量
console.log(privateVariable); // 会报错，因为privateVariable不在全局作用域内
