function throttle(f, interval, leading = false) {
    let lastTime = 0;
    return function (...args) {
        let nowTime = Date.now();
        //
        if (!leading && !lastTime) {
            lastTime = nowTime;
        }
        if (interval <= nowTime - lastTime) {
            f(...args);
            lastTime = nowTime
        }
    }
}