/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-04 19:48:46
 * @LastEditTime: 2019-09-04 19:53:13
 */
function findMaxCommonSubStrLength(str1, str2, start, len) {
    if (start == null) {
      start = -1;
      var s = str1.length <= str2.length ? str1 : str2;
      var l = str1.length > str2.length ? str1 : str2;
      str1 = s;
      str2 = l;
    }
  
    start++;
  
    if (!len) {
      len = str1.length;
    }
  
    var end = start + len;
    if (end > str1.length) {
      if (len == 1) {
        return 0;
      }
      return findMaxCommonSubStrLength(str1, str2, -1, --len);
    }
    var temp = str1.substring(start, end);
    if (str2.indexOf(temp) != -1) {
      return temp.length;
    }
    return findMaxCommonSubStrLength(str1, str2, start, len);
  }
  console.log(findMaxCommonSubStrLength("abcd","abdde"))