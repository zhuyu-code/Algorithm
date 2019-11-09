/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-18 19:29:02
 * @LastEditTime: 2019-08-18 20:49:00
 */
var isValid = function (s) {
  var map = {
    "(": -1,
    ")": 1,
    "{": -2,
    "}": 2,
    "[": -3,
    "]": 3
  }
  var arr = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      arr.push(s[i])

    } else {
      var popArr = arr.pop();
      if (map[popArr] + map[s[i]] != 0) {
        return false;
      }
    }
  }
  if (arr.length > 0) return false
  return true;
};
console.log(isValid("()[]{}"))