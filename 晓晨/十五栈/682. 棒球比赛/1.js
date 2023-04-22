/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
   const res = []
    for (let i = 0; i < operations.length ; i++) {
        const len = res.length
     if (operations[i] === '+') {
            res.push(res[len-1] + res[len-2])
        } else if (operations[i] === 'D') {
            res.push(res[len-1] * 2)
        }  else if (operations[i] === 'C') {
            res.pop()
        } else {
         res.push(Number(operations[i]))
     }
    }
    return res.reduce((prev, cur) => prev + cur, 0)
};
console.log(calPoints( ["5","2","C","D","+"]))