var backspaceCompare = function(S, T) {
  let i = S.length - 1,
      j = T.length - 1,
      skipS = 0,
      skipT = 0;
  //双指针从右往左循环
  while(i >= 0 || j >= 0){
      while(i >= 0){//处理掉# 直到left指向的字符右边退格全部处理掉
          if(S[i] === '#'){
              skipS++;
              i--;
          }else if(skipS > 0){
              skipS--;
              i--;
          }else break;
      }
      while(j >= 0){//处理掉# 直到right指向的字符右边退格全部处理掉
          if(T[j] === '#'){
              skipT++;
              j--;
          }else if(skipT > 0){
              skipT--;
              j--;
          }else break;
      }
      if(S[i] !== T[j]) return false;//如果处理掉退格之后的字符串不相等，返回false
      i--;//继续循环
      j--;
  }
  return true;//如果循环过程中没返回false 最后就返回true
};

