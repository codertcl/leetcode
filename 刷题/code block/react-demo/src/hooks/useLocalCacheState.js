import {useEffect, useState} from "React";

export function useLocalCacheState({
                                       key, initialValue, onChange
                                   }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const newValue = localStorage.getItem(key);
        setValue(key);
        onChange && onChange(newValue);
    }, [])

    const setValueWrapper = (val) => {
        setValue(val);
        localStorage.setItem(key, val);
        onChange && onChange(val);
    }
    return [value, setValueWrapper];
}