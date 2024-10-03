// 当for循环每次迭代时，都会创建一个新的 IIFE，
// 并且将当前的i值作为参数j传递给这个 IIFE，所以依次输出0-4
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}
// 如果不使用立即执行函数，由于var的变量提升和没有块级作用域，会导致在setTimeout中的回调函数里使用的i都是循环结束后的5
