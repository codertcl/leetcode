// @ts-ignore
function visitNode(n: Node) {
    if (n instanceof Comment) {
        console.info("Comment node 注释节点", n.textContent);
    }
    if (n instanceof Text) {
        const text = n.textContent?.trim();
        // 不显示空格
        if (text) {
            console.info("Text node 文本节点", text);
        }
    }
    if (n instanceof HTMLElement) {
        console.info("HTML node 元素节点", n.tagName);
    }
}

// 广度优先遍历
function breadthFirstTraversal(root: Node | null) {
    if (!root) return null;
    const queue: Node[] = [];
    queue.unshift(root);
    while (queue.length) {
        const curNode = queue.pop();
        if (!curNode) {
            break;
        }
        visitNode(curNode);
        // 子节点入队
        const childNodes = curNode.childNodes; //获取所有元素类型，包含文本、注释、节点、换行符（children只有节点）
        if (childNodes.length) {
            childNodes.forEach(childNode => {
                queue.unshift(childNode);
            })
        }
    }
}

const rootNode = document.querySelector("#box");
if (!rootNode) {
    throw new Error("root is null")
}
breadthFirstTraversal(rootNode)
