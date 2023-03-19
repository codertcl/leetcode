var findWords = function (board, words) {
    const trie = new Trie();
    const dxys = [
        [0, -1],
        [-1, 0],
        [0, 1],
        [1, 0],
    ];
    const xLen = board.length,
        yLen = board[0].length;
    const visited = {};
    const ret = [];

    // 构建Trie
    for (let word of words) {
        trie.insert(word);
    }

    // DFS board
    const dfs = (x, y, nodes, str) => {
        if (nodes[board[x][y]].isEnd) {
            ret.push(str + board[x][y]);
            // 置为false是为了防止重复将字符串加入到ret中
            nodes[board[x][y]].isEnd = false;
        }

        // 处理本层状态
        nodes = nodes[board[x][y]];
        str += board[x][y];

        // 向四联通方向检索
        visited[x * 100 + y] = true;
        for (let [dx, dy] of dxys) {
            const newX = x + dx,
                newY = y + dy;

            if (
                newX < 0 ||
                newY < 0 ||
                newX >= xLen ||
                newY >= yLen ||
                !nodes[board[newX][newY]] ||
                visited[newX * 100 + newY]
            )
                continue;

            dfs(newX, newY, nodes, str);
        }
        visited[x * 100 + y] = false;
    };

    for (let x = 0; x < xLen; x++) {
        for (let y = 0; y < yLen; y++) {
            if (trie.children[board[x][y]]) dfs(x, y, trie.children, "");
        }
    }

    return ret;
};

var Trie = function () {
    this.children = {};
};

Trie.prototype.insert = function (word) {
    let nodes = this.children;
    for (const ch of word) {//循环word
        if (!nodes[ch]) {//当前字符不在子节点中 则创建一个子节点到children的响应位置
            nodes[ch] = {};
        }
        nodes = nodes[ch];//移动指针到下一个字符
    }
    nodes.isEnd = true;//字符是否结束
};


