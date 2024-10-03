var myModule = (function () {
    var privateData = [];
    function addData(data) {
        privateData.push(data);
    }
    function getData() {
        return privateData;
    }
    return {
        add: addData,
        get: getData
    };
})();
myModule.add('一些数据');
console.log(myModule.get());
// undefined 无法访问到未返回的privateData
console.log(myModule.privateData);
