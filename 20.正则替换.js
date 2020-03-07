/*
 * @Description: 
        请找出一个函数，将字符串所有的空格替换成%20
        比如 We are Right=>We%20are%20Right
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 10:03:39
 * @LastEditTime: 2019-08-15 10:51:25
 */
const str = "We are Right"

function replaceSpace(str) {
  return str.replace(/\s/g, "%20");
}
console.log(replaceSpace(str));