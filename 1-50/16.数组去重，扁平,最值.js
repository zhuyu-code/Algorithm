/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-22 11:01:50
 * @LastEditTime: 2019-08-23 23:23:23
 */
//去重
// const unique = (array) => {
//   var arr = array.filter(item => {
//     return item.hasOwnProperty()
//   })
// }
var arr = [12, 1, 31, 4, 46, 78];
var crr = [];
var brr = arr.filter((item) => {
  return item % 2 == 0 ? crr.push(item) : false
});
console.log(crr)