// 引入外部的脚本函数 创建worker的type类型为classic时
// importScripts("add.js")

// 引入外部的脚本函数 创建worker的type类型为module时
import add from "./add.js"
self.addEventListener('message', function(event) {
    const data = event.data;

    if (data.action === 'start') {
        let count = add(1, 2);
        setInterval(() => {
            count++;
            self.postMessage(count);
        }, 1000); // 每秒增加一次计数
    } else if (data.action === 'stop') {
        clearInterval(); // 停止计数
        self.close();
    }
});