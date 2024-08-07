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

// 深度优先遍历
function depthTraverse(root: Node | null) {
    if (!root) return null;
    const stack = [root];
    while (stack.length) {
        const curNode = stack.pop();
        if (!curNode) break;
        visitNode(curNode)
        const childNodes = curNode.childNodes; //获取// 所有元素类型，包含文本、注释、节点、换行符（children只有节点）
        if (childNodes.length) {
            Array.from(childNodes).reverse().forEach(childNode => {
                stack.push(childNode);
            })
        }
    }
}

const root = document.querySelector("#box");
if (!root) {
    throw new Error("root is null")
}
depthTraverse(root)
