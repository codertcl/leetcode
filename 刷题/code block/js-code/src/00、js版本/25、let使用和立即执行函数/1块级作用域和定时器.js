// 由于for循环是同步事件，js先依次将同步事件添加到执行栈中，并执行同步事件,所以先依次输出三个a 三个b
// setTimeout为异步事件，将其放入任务队列中，在同步事件执行完毕后，再将异步任务依次放入执行栈中执行
// 由于var类型变量是一个全局变量，每次循环中的i都是同一个变量，只是每次进行重新赋值 所以在执行定时器中输出时，由于for循环已经结束
// i变成了3，所以输出三个3
// let具有块级作用域，每次循环中的i都是重新定义的变量，其不会共享内存空间，所以每次输出时是0 1 2
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 500)
    console.log('a')
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j)
    }, 500)
    console.log('b')
}

////此处综合了立即执行函数和闭包
for (var i = 0; i < 3; i++) {
    (function fun(i) {
        //定时器内部第一个参数即为函数 其使用外层fun函数的参数i 构成了闭包
        setTimeout(() => {
            console.log(i)
        }, 500)
    })(i)
}
// a a a
// b b b
// 3 3 3
// 0 1 2
// 0 1 2