import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export function useDayjsBasedOnData(data, initialDate = dayjs(), formatString) {
    const [currentMoment, setCurrentMoment] = useState(initialDate);

    // 更新 currentMoment 的值
    const updateCurrentMoment = (newDate) => {
        setCurrentMoment(dayjs(newDate));
    };

    useEffect(() => {
        // 当 data 改变时，更新 currentMoment
        updateCurrentMoment();
    }, [data]);

    // 格式化输出
    const formattedDate = formatString ? currentMoment.format(formatString) : currentMoment;

    return [formattedDate, updateCurrentMoment];
}