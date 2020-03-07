
/*
 * @Description: 编写一个方法，去掉数组中重复的数字
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 11:21:09
 * @LastEditTime: 2019-08-29 15:41:39
 */
//方法1，使用set
function repeat(arr) {
  const set = new Set(arr);
  return Array.from(set)
}
console.log(repeat([1, 5, 8, 7, 9, 5]));
//利用hashmap的键值不重复特性
function repeat2(arr) {
  var obj = {};
  var arrk = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    obj[arr[i]] = i
  }
  for (let i in obj) {
    arrk.push(parseInt(i));
  }
  return arrk;
}
console.log(repeat2([1, 5, 8, 7, 9, 5]));

//方法3
function repeat3(arr) {
  var arrk = [];
  arr.forEach(item => {
    if (arrk.indexOf(item) == -1) {
      arrk.push(item);
    }
  })
  return arrk;
}
console.log(repeat3([1, 5, 8, 7, 9, 5]));
//方法4
//硬排序
function repeat7(arr) {
  var arrk = arr.sort();
  for (let i = 0; i < arrk.length; i++) {
    if (arrk[i] == arr[i + 1]) {
      arrk.pop(arrk[i])
    }
  }
  return arrk;
}

//方法5
//只要数字重复，将重复的数字一起去掉。剩下的是没有带重复，和上面的去重不一样
//通过重复索引
function repeatIndex(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === arr.lastIndexOf(item))
}
//方法1变种
//利用Object+filter+hasOwnproperty变种
function repeat4(arr) {
  var object = {}
  return arr.filter(item => object.hasOwnProperty(item) ? false : object[item] = item)
}
//方法2变种
//利用filter+indexOf
function repeat5(arr) {
  var arrk = [];
  return arr.filter(item => arrk.indexOf(item) == -1 ? arrk.push(item) : false)

}
//方法3变种
//Set直接解构变种法
function repeat6(arr) {
  var unique = [...new Set(arr)]
  return unique;
}
console.log(repeat7([1, 1, 2, 5, 4, 4]))