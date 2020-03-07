/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 16:08:38
 * @LastEditTime: 2019-08-15 17:32:19
 */
function A(a, b) {
  function B() {
    console.log(a);
    console.log(b);
  }
  return B;
}
var f = A(1, 2); //这个变量不销毁会造成内存泄露，可以把局部作用域封存
f();