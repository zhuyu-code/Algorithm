/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 18:06:46
 * @LastEditTime: 2019-09-14 11:31:27
 */
//六种基本数据类型number boolean string null undefined symbol,基础类型的数字是没有函数可以调用的。
//注意可能1.当做一个整体
console.log((1).toString())
console.log("1".toString());

function A() {
  console.log("函数")
}
var A = function () {
  console.log("变量")
}
A(); //变量
var B = "12"

function B() {
  console.log("函数")
}

console.log(B);
//console.log(B()) //报错，后面的已经覆盖前面的了。


//bind永远指向第一个函数
let a = {}
let fn = function () {
  console.log(this)
}
//fn.bind().bind(a)() // => ?

console.log(null == undefined);

var b = {
  valueOf() {
    return 6;
  },
  toString() {
    return "转换为字符串"
  }
}
console.log(b + 2);
console.log(true == 1);
console.log([] == ![]) //全局由对象转化为字符串进行操作。