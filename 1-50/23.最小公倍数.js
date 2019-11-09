/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 13:10:06
 * @LastEditTime: 2019-08-14 13:10:06
 */
/*蘑菇街校招
 * @Description: 最小公倍数
 原理：两个数的最小公倍数等于这两个数的乘积除以这两个数的最大公约数
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 13:10:06
 * @LastEditTime: 2019-08-14 18:05:06
 */

//先求出最大公约数
function divider(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "应该输入数字"
  }
  if (a <= 0 || b <= 0) {
    return "应该输入整数"
  }
  if (a < b) {
    var temp = a;
    a = b;
    b = temp;
  }
  var tempdiv = 0;
  while (a % b !== 0) {
    tempdiv = a - b;
    a = b;
    b = tempdiv;
  }
  return tempdiv;
}

function multiple(a, b) {
  var pursue = a * b;
  //求出最大公约数
  var did = divider(a, b);
  return pursue / did;
}
console.log(multiple(6, 4))