
/*蘑菇街校招
 * @Description: 最小公约数
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 12:10:07
 * @LastEditTime: 2019-08-18 08:50:09
 */
//方法一：辗转相除法
function divisor1(a, b) {
  //先排序，大的在前面，如果不是则交换位置
  if (typeof a !== "number" || typeof b !== "number") {
    return "输入必须为数字"
  }
  if (a <= 0 || b <= 0) {
    return "必须为正数"
  }

  if (a < b) {
    var temp = a;
    a = b;
    b = temp
  }
  //使用一个变量存储除数，因为最后除数才是最小公约数
  while (a % b !== 0) {
    tempdiv = a % b;
    a = b;
    b = tempdiv;
  }
  return tempdiv;
}
console.log(divisor1(4, 6))





//方法一变种递归法
function divisor2(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "输入必须为数字"
  }
  if (a <= 0 || b <= 0) {
    return "必须为正数"
  }
  //把最大的放前面
  if (a < b) {
    var temp = a;
    a = b;
    b = temp;
  }
  if (a % b == 0) {
    return b; //返回除数
  }
  //如果不为0，进行递归
  return divisor2(b, a % b);
}
console.log(divisor2(6, 4))




//方法二，更相减损法
function divisor3(a, b) {
  var temp, index = 0;
  if (typeof a !== "number" || typeof b !== "number") {
    return "输入必须为数字"
  }
  if (a <= 0 || b <= 0) {
    return "必须为正数"
  }
  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }
  while (a % 2 == 0 && b % 2 == 0) {
    a = a / 2;
    b = b / 2;
    index++
  }
  var tempdiv = b;
  while (a - b !== b) {
    tempdiv = a - b;
    a = b;
    b = tempdiv;
    if (b < 0) {
      b = -b;
    }
  }
  return tempdiv * 2 * index; //记得加上倍数
}
console.log(divisor3(6, 4))