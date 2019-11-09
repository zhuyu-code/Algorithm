/*
 * @Description: 随机打乱一个数组顺序
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-29 22:03:13
 * @LastEditTime: 2019-08-29 22:13:09
 */
function arrSort(arr) {
  var length = arr.length;
  var current = length - 1

  while (current > -1) {
    var number = Math.floor(Math.random() * length);
    [arr[number], arr[current]] = [arr[current], arr[number]];
    current--;
  }
  return arr;
}
console.log("start1")
console.log(arrSort([1, 2, 3, 4, 5, 6]));
console.log("end")