/*
 * @Description: 数组扁平化，就是将多维数组转化为一维数组
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-29 17:30:32
 * @LastEditTime: 2019-08-29 19:27:24
 */
//方法1
const flat = (arr) => {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

//方法2
//使用reduce简化
//注意reduce每次都要返回
const flatten = (arr) => {
  return arr.reduce((target, item) => {
    console.log(target)
    Array.isArray(item) ? target.concat(flatten(item)) : target.concat(item)
  }, [])
}

function flatten2(array) {
  return array.reduce(
    (target, current) =>
    Array.isArray(current) ?
    target.concat(flatten2(current)) :
    target.concat(current), [])
}
console.log(flatten2([1, 2, [4, 45]]));
//方法3
//根据指定深度扁平数组
function flattenByDeep(array, deep = 1) {
  return array.reduce(
    (target, current) =>
    Array.isArray(current) && deep > 1 ?
    target.concat(flattenByDeep(current, deep - 1)) :
    target.concat(current), [])
}
console.log(flattenByDeep([
  [1, 2, 5, [1, 9, 8]],
  [4, 8, 9]
]))