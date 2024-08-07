// var 声明的变量会挂载在 window 上，而 let 和 const 声明的变量不会挂载到 window 上。
const value = 1;
const obj = {
    value: 42,
    showValue: function () {
        console.log(this.value);
    },
};

// 当你执行setTimeout(obj.showValue)时，你实际上是将obj.showValue函数作为引用传递给了setTimeout。
// 但是，这里的关键是，当你这样做时，你并没有保留obj作为调用上下文（即this的值）
// 在JavaScript中，如果一个函数是作为非方法（即非通过某个对象直接调用）的形式被调用，并且该函数内部没有通过.call(), .apply(), .bind(),
// 或者使用箭头函数等方式显式设置this，那么this的值在严格模式下会是undefined（在非严格模式下，this会指向全局对象，在浏览器中通常是window）。
// 在你的例子中，setTimeout内部的环境是全局的，并且没有显式地设置this，所以this.value在showValue函数内部变成了undefined
//然后，console.log(undefined)输出了undefined

setTimeout(obj.showValue) // undefined
setTimeout(() => {
    obj.showValue() // 42
})

// 在这个调用中，我们使用了一个箭头函数作为setTimeout的回调。箭头函数与常规函数在对待this关键字上有根本的不同。箭头函数不会创建自己的this绑定；
// 相反，它们会从外围作用域（lexical scope）继承this值。这意味着在箭头函数内部，this值是基于定义箭头函数的位置，而不是调用位置。
// 在这个例子中，箭头函数被定义在全局作用域中，但是由于它是在模块或文件的顶层定义的，this将指向模块的顶层作用域
// （在浏览器环境中通常指向window，但在严格模式下，this将为undefined）。然而，重要的是obj.showValue()是在箭头函数体内调用的，因此这里的this值与外部的this值无关。
// 由于obj.showValue()是在obj的上下文中调用的（即，this值为obj），showValue函数内的this将会指向obj对象。因此，console.log(this.value)将输出42，这是obj对象上value属性的值。