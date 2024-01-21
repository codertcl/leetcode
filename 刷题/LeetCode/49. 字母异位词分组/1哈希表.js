/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach((item) => {
    const sortStr = item.split('').sort().join('')
    map.set(sortStr, map.has(sortStr) ? [...map.get(sortStr), item] : [item])
  })
  return [...map.values()]
};
console.log(groupAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams( [""]))
console.log(groupAnagrams( ["a"]))
