/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {

};

var diameterOfBinaryTree = function (root) {
    let ans = 0; // 定义一个递归函数，返回子树的深度
    function depth(node) {
        if (!node) return 0;
        let leftDepth = depth(node.left);
        // 左子树深度
        let rightDepth = depth(node.right); // 右子树深
        ans = Math.max(ans, leftDepth + rightDepth); // 更新ans
        return 1 + Math.max(leftDepth, rightDepth); // 返回当前子树的深度
    }
    depth(root);
    return ans;
};

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    // 将项目按照所需资本从小到大排序
    const projects = []
    for (let i = 0; i < profits.length; i++) {
        projects.push({ profit: profits[i], capital: capital[i] })
    }
    projects.sort((a, b) => a.capital - b.capital)

    // 使用一个大根堆来保存当前可选项目的纯利润
    const heap = new Heap((a, b) => b - a)
    let i = 0 // i表示当前遍历的项目下标
    while (k > 0) {
        // 将可选的项目加入大根堆中
        while (i < projects.length && projects[i].capital <= w) {
            heap.push(projects[i].profit)
            i++
        }
        // 如果堆为空，说明没有可选的项目，直接退出循环
        if (heap.isEmpty()) {
            break
        }
        // 选取堆顶项目，并更新当前资本
        w += heap.pop()
        k--
    }
    return w
};

// 定义一个堆类
class Heap {
    constructor(compare) {
        this.data = []
        this.compare = compare
    }

    push(val) {
        this.data.push(val)
        this.heapifyUp(this.data.length - 1)
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }
        const top = this.data[0]
        const last = this.data.pop()
        if (this.data.length > 0) {
            this.data[0] = last
            this.heapifyDown(0)
        }
        return top
    }

    isEmpty() {
        return this.data.length === 0
    }

    heapifyUp(idx) {
        while (idx > 0) {
            const parent = (idx - 1) >> 1
            if (this.compare(this.data[idx], this.data[parent]) > 0) {
                this.swap(idx, parent)
                idx = parent
            } else {
                break
            }
        }
    }

    heapifyDown(idx) {
        const size = this.data.length
        while (idx < size) {
            let maxIdx = idx
            const left = idx * 2 + 1
            const right = idx * 2 + 2
            if (left < size && this.compare(this.data[left], this.data[maxIdx]) > 0) {
                maxIdx = left
            }
            if (right < size && this.compare(this.data[right], this.data[maxIdx]) > 0) {
                maxIdx = right
            }
            if (maxIdx !== idx) {
                this.swap(idx, maxIdx)
                idx = maxIdx
            } else {
                break
            }
        }
    }

    swap(i, j) {
        const temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }
}