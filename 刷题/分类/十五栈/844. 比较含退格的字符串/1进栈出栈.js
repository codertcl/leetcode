/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const f = (str) => {
      let a = []
      for (const sElement of str) {
          a[sElement === '#' ? 'pop' : 'push'](sElement)
      }
      return a.join('')
  }
  return f(s) === f(t)
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("a#c", "c#d#"));
console.log(backspaceCompare("a#c#", "c#d#"));
console.log(backspaceCompare("a#c", "c#d"));
console.log(backspaceCompare("ab##", "c#d#"));