var checkInclusion = function (s1, s2) {
    //need 统计s1中的字符及其数量 window统计窗口中的字符及其数量
    //valid为窗口中当前满足数量要求的字符数
    let need = {}, window = {}, valid = 0, left = 0, right = 0
    //统计s1中的字符及其数量
    for (let a of s1) {
        need[a] = (need[a] || 0) + 1
    }
    while (right < s2.length) {
        //right右指针 新加入到窗口中的字符
        let b = s2[right]
        right++
        //当前字符在需要的字符中，则更新当前窗口统计
        if (need[b]) {
            window[b] = (window[b] || 0) + 1
            //b字符属性达到要求 则valid++
            if (window[b] === need[b]) {
                //当前窗口和需要的字符匹配时，验证数量增加1
                valid++
            }
        }
        // // 收缩窗口
        while (right - left >= s1.length) {
            if (valid === Object.keys(need).length) return true;

            // 移出的元素
            let d = s2[left];
            left++;
            //需要该字符d
            if (need[d]) {
                // 如果移出的元素在需要我元素范围内的话，则valid相应减1
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return false
};

console.log(checkInclusion('ab', 'eidbaooo'))//true
console.log(checkInclusion('ab', 'eidboaoo'))//false
console.log(checkInclusion("abcdxabcde", "abcdeabcdx"))//true
