/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false
    for(let i=0;i<32;i++){
        if((1<<i)===n){
            return true
        }
    }
    return false
};

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(-2147483648))
