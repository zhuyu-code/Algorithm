/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-17 20:36:17
 * @LastEditTime: 2019-08-18 08:21:25
 */

/*
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:

输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
示例 2:

输入: "aba"

输出: False
示例 3:

输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
*/
// 使用模式匹配，也就是\1,表示提取前面括号捕获的内容，比如/^(\w+)\1+$/，就是匹配\w也就是字符串，横线，下划线的简写多个，然后\1也等于这个内容，+代表1个或者多个，也就是必须是捕捉字符串的一倍或者多倍才能匹配
var repeatedSubstringPattern = function (s) {
  var reg = /^(\w+)\1+$/;
  return reg.test(s)
};
repeatedSubstringPattern("abcabcabcabc");