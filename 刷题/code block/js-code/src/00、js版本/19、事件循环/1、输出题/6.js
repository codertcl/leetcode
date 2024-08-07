// 1. 执行同步任务输出script start
console.log('script start');

async function async1() {
    // 3、执行async2函数
    await async2()
    // 5、输出任务添加到微任务队列中
    // 9、输出async1 end
    console.log('async1 end');
}

async function async2() {
    // 4、输出async2 end
    console.log('async2 end');
}

// 2、执行async1函数
async1()
setTimeout(function () {
    // 6、输出任务添加到宏任务队列中
    // 13、输出setTimeout
    console.log('setTimeout');
}, 0)
new Promise(function (resolve, reject) {
    // 7、输出promise
    console.log('promise');
    resolve()
})
    .then(() => {
        // 8、输出任务添加到微任务队列中
        // 10、输出then1
        console.log('then1');
    })
    .then(() => {
        // 11、输出任务添加到微任务队列中
        // 12、输出then2
        console.log('then2');
    })
// 9、输出script end
console.log('script end');

// script start
// async2 end
// promise
// script end
// async1 end
// then1
// then2
// setTimeout