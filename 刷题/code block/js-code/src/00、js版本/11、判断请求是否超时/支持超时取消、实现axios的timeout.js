function fetchWithTimeout(resource, options = {}, timeout = 5000) {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchPromise = fetch(resource, {
        ...options,
        signal
    });

    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            controller.abort()
            reject("超时")
        }, timeout);
        fetchPromise.then((res) => {
            clearTimeout(timer);
            resolve(res);
        }).catch((err) => {
            clearTimeout(timer)
            reject(error);
        })
    })
}


// 使用示例
fetchWithTimeout('https://example.com/api/data', {}, 3000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
