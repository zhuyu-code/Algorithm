/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-29 19:28:36
 * @LastEditTime: 2019-08-29 20:44:04
 */
//1.使用reduce求最值,不设置初始值会根据表达式自动设置储值
console.log([1, 8, 9, 5, 4, 6].reduce((c, n) => Math.max(c, n)))
console.log([1, 2, 3, 4].reduce((num, item) => num += item));
console.log([1, 2, 3, 4].reduce((num, item) => num *= item))
//Math.max
console.log(Math.max(...[1, 5, 6, 7])) //打印NAN，不接收数组，怎么让他可以直接传入数组，那么使用apply隐市绑定在window上。

//2.因为Math.max不接收数组，那么问题来了，就可以使用apply传递数组参数的形式隐式绑定。
console.log(Math.max.apply(null, [1, 5, 9, 8]))

//3.使用reduce模拟map