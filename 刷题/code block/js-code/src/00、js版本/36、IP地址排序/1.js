const ip = ['192.165.2.3','192.164.2.3','192.165.52.3','102.165.2.3','192.165.2.63','192.15.2.53']
const newIp = ip.sort((a,b)=>{
    const ip1 = a.split('.').map(e=>e.padStart(3,'0')).join('')
    const ip2 = b.split('.').map(e=>e.padStart(3,'0')).join('')
    return ip1 - ip2 // 使用算术运算符（如 -）对两个字符串进行操作时，JavaScript 会自动将这两个字符串转换为数字，然后进行相应的数学运算。
})
console.log(newIp)
