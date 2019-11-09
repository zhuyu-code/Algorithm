/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-17 21:28:49
 * @LastEditTime: 2019-08-17 23:01:28
 */
function f(n) {
  var b = n.toString();
  var arr = b.split(".");
  var len = arr[0].length;
  if (len <= 3) {
    return b;
  }

  var r = len % 3;
  console.log("成功");
  console.log(b.slice(r.len).match(/\d{3}/g))
  return r > 0 ? [b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(","), arr[1]].join(".") : [b.slice(r, len).match(/\d{3}/g).join(","), arr[1]].join(".")

}
console.log(f('14'))
console.log(f('123523434.65'))