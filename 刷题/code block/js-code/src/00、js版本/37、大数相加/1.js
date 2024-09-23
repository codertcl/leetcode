const sumStrings = (n1, n2) => {
    const a = n1.split("").reverse().map((n) => +n), b = n2.split("").reverse().map((n) => +n);
    let carry = 0, res = "", index = 0;
    while (index < a.length || index < b.length || carry) {
        let sum = (a[index] || 0) + (b[index] || 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        res = sum + res;
        index++;
    }
    return res.replace(/^0+/g, "");
}

console.log(sumStrings('00011119991', '0001119999111'))
