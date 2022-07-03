// var toHex = function(num) {
//     if (num === 0) {
//         return "0";
//     }
//     const sb = [];
//     for (let i = 7; i >= 0; i --) {
//         const val = (num >> (4 * i)) & 0xf;
//         if (sb.length > 0 || val > 0) {
//             const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10);
//             sb.push(digit);
//         }
//     }
//     return sb.join('');
// }

function toHex(num) {
    if (!num) return '0'
    const nums = '0123456789abcdef'
    let ans = ''
    //num为32位数,每个四位构成一个十六进制数,ans最多为8位
    while (num && ans.length < 8) {
        // 0xf即1111,num的低四位与其进行位与,得到二进制数
        // (转换为十进制后再去nums中找到的十六进制表示)
        // num最后再右移思维
        let index=num & 0xf
        ans = nums[index] + ans
        num = num >> 4
    }
    return ans
};

console.log(toHex(120))
console.log(toHex(5))
console.log(toHex(-5))
