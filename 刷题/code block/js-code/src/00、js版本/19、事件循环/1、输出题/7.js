async function async1() {
    // 4、输出async1 start
    console.log("async1 start");
    // 5、执行async2函数
    await async2();
    // 8、输出任务添加到微任务队列中
    // 12、开始执行第一个微任务 输出
    console.log("async1 end");
}
async function async2() {
    new Promise(function (resolve) {
        // 6、输出promise1
        console.log("promise1");
        resolve();
    }).then(function () {
        // 7、输出任务添加到微任务队列中
        // 11、输出
        console.log("promise2");
    });
}
// 1. 执行同步任务输出script start
console.log("script start");

setTimeout(function () {
    // 2、输出任务添加到宏任务队列中
    // 13、宏任务执行，输出
    console.log("setTimeout");
}, 0);

// 3、执行async1函数
async1();

new Promise(function (resolve) {
    // 9、输出promise3
    console.log("promise3");
    resolve();
}).then(function () {
    // 10、输出任务添加到微任务队列中
    // 13、输出
    console.log("promise4");
});

// 11、输出script end
console.log("script end");

// script start
// async1 start
// promise1
// promise3
// script end
// promise2
// async1 end
// promise4
// setTimeout
