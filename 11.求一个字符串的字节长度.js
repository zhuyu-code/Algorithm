/*
 * @Description: 
 假设：一个英文字符占用一个字节，一个中文字符占用两个字节
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 11:16:18
 * @LastEditTime: 2019-08-15 11:19:38
 */
function sumByte(str) {
  var bytes = str.length;
  for (let i = 0, len = str.length; i < len; i++) {
    if (str.charCodeAt(i) > 255) {
      bytes++;
    }
  }
  return bytes;
}