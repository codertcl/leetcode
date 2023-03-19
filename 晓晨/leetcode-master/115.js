//dp[i][j]表示以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]
const numDistinct = (s, t) => {
    //初始化dp数组，
  let dp = Array.from(Array(s.length + 1), () => Array(t.length +1).fill(0));
      //当j=0时，相当于t时空字符串，空字符在另一个字符串的子串中出现一次，此时第一列都初始化为1，
  for(let i = 0; i <=s.length; i++) {
      dp[i][0] = 1;
  }
  //当s[i-1] == t[j-1]：
    //1.用s[i - 1]来匹配 dp[i][j] = dp[i-1][j-1]
    //2.不用s[i - 1]来匹配 dp[i][j] = dp[i-1][j]
    //当s[i-1] != t[j-1]：不能用s[i-1]来匹配s[i - 1]匹配不了t[j-1]，所以dp[i][j] = dp[i-1][j]
  for(let i = 1; i <= s.length; i++) {
      for(let j = 1; j<= t.length; j++) {
          if(s[i-1] === t[j-1]) {
              dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
          } else {
              dp[i][j] = dp[i-1][j]
          }
      }
  }

  return dp[s.length][t.length];
};

