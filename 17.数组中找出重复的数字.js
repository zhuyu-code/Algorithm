/*
 * @Description:  找出数组中重复的数字。
在一个长度为n的数组中，所有的数字都在0~n-1中，不知道哪个数字重复了，也不知道哪个数字重复了几次
请找出任意一个重复的数字,输出出来
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-13 21:22:22
 * @LastEditTime: 2019-08-15 11:11:40
 */

const arr = [2, 1, 5, 6, 5, 7, 6, 0];
console.log(arr.sort());
//方法一，最笨的方法
//先排序，后采用两种循环判断循环内容
function repeatArray(arr) {
  var Karr = arr.sort();
  var Tarr = []
  for (let i = 0; i < Karr.length; i++) {
    for (let j = i + 1; j < Karr.length; j++) {
      if (Karr[j] == Karr[i]) {
        Tarr.push(Karr[i])
      }
    }
  }
  return Tarr;
}
console.log(repeatArray(arr));

//方法二，采用两个数组，indexOF判断
function repeatArray2(arr) {
  var Tarr = [];
  var Barr = []
  arr.forEach(item => {
    if (Tarr.indexOf(item) == -1) {
      Tarr.push(item)
    } else {
      Barr.push(item)
    }
  })
  return Barr;
}
console.log(repeatArray2(arr))


//方法三，使用下标交换的方式,牺牲时间换空间。
function isArray(arr) {
  if (!Object.prototype.toString.call(arr) == "[object Array]") {
    return true;
  }
}

function chat(arr) {
  if (!isArray) {
    return false;
  }
  if (arr.length <= 0) {
    return "数组长度不能为空"
  }
  //判断所有数是不是都在0-n-1之间大小
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return "数字不在arr之间"
    }
  }
  //开始下标交换
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i) {
      if (arr[i] == arr[arr[i]]) {
        return arr[i];
      }
      //开始一重循环开始
      var temp = arr[i];
      arr[i] = arr[temp];
      arr[temp] = temp;
    }
  }
}
console.log(chat(arr));
//方法4，使用Object构造哈希map
function repeatArray3(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++;
    }
  }
  var repeat_key = [];
  for (let i in obj) {
    if (obj[i] > 1) {
      repeat_key.push(parseInt(i))
    }
  }
  return repeat_key;
}
console.log("方法4");
console.log(repeatArray3(arr));