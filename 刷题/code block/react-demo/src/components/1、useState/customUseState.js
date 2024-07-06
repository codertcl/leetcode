const states = [];
let hookIndex = 0;
const render = () => {}
export const CustomUseState = (initialValue) => {
    states[hookIndex] = states[hookIndex] || initialValue;

    // 利用闭包维护函数调用位置
    const curIndex = hookIndex;
    const setState = (newVal) => {
        states[curIndex] = newVal;
        // 触发视图更新
        render();
    }

    return [states[hookIndex++], setState];
}