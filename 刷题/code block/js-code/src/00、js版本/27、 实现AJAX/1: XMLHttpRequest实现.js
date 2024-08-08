function ajaxRequest(method, url, data, callback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    // 设置请求头，特别是对于POST请求
    if (method === 'POST') {
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }

    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                callback(JSON.parse(xhr.responseText));
            } catch (e) {
                errorCallback('Error parsing JSON response.', e);
            }
        } else {
            errorCallback('Request failed with status: ' + xhr.status);
        }
    };

    xhr.onerror = function () {
        errorCallback('Request failed due to a network error.');
    };

    if (method === 'POST') {
        xhr.send(JSON.stringify(data));
    } else {
        xhr.send();
    }
}

// 使用示例
// GET请求
ajaxRequest('GET', 'https://api.example.com/data', null,
    function(response) {
        console.log('GET 请求响应:', response);
    },
    function(error) {
        console.error('GET 请求错误:', error);
    }
);

// POST请求
var postData = { key: 'value' };
ajaxRequest('POST', 'https://api.example.com/save', postData,
    function(response) {
        console.log('POST 请求响应:', response);
    },
    function(error) {
        console.error('POST 请求错误:', error);
    }
);
