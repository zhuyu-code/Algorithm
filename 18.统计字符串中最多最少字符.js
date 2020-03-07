/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 10:51:59
 * @LastEditTime: 2019-08-15 11:10:09
 */
var str = "abcdefgaddda";

function calcString(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]]++;
    }
  }
  var max = -1;
  var max_key = "";
  for (let i in obj) {
    if (obj[i] > max) {
      max = obj[i];
      max_key = i;
    }
  }
  // return "出现最多项为" + max_key + "最大次数分为" + max;
  return max_key
}
console.log(calcString(str));