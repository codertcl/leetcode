var RandomizedSet = function () {
    this.map = new Map();
    this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        const index = this.map.get(val);
        // 将最后一个元素移动到要删除的位置
        this.list[index] = this.list[this.list.length - 1];
        // 更新哈希表中原本最后一个元素的索引 ,必须先set再delete ,处理删除的元素就是最后一个元素
        this.map.set(this.list[index], index);
        // 删除map中的val和数组最后一个元素
        this.map.delete(val);
        this.list.pop();
        return true
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.list[Math.floor(this.list.length * Math.random())]
};