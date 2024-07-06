import {CustomUseState} from "./customUseState";

export const RenderCount = () => {
    const [count, setCount] = CustomUseState(0);
    const [age, setAge] = CustomUseState(0);

    return (
        <div>
            数字{count}
            <button onClick={() => {
                setCount(count + 1);
                console.log('count', count)
            }}>click
            </button>
            <br/>
            年龄{age}
            <button onClick={() => {
                setAge(age + 1)
                console.log('age', age)
            }}>click
            </button>
        </div>
    )
}