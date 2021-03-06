function shellSort(arr) {
    let len = arr.length;
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            let j = i;
            let current = arr[i];
            while (j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}

console.log(shellSort([50, 70, 60, 80, 61, 84, 83, 88, 87, 99]))
//[50, 60, 61, 70, 80, 83, 84, 87, 88, 99]
