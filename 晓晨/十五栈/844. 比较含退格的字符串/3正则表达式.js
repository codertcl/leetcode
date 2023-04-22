/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const f = (str) => {
     while (str.indexOf('#') > -1) {
       str = str.replace(/.?#/, '')
     }
     return str
  }
  return f(s) === f(t)
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("a#c", "c#d#"));
console.log(backspaceCompare("a#c#", "c#d#"));
console.log(backspaceCompare("a#c", "c#d"));
console.log(backspaceCompare("ab##", "c#d#"));