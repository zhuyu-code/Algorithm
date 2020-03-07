/*
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

 

示例 1：

输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
示例 2：

输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
示例 3：

输入：[1]
输出：false
解释：没有满足要求的分组。
示例 4：

输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
示例 5：

输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：

1 <= deck.length <= 10000
0 <= deck[i] < 10000

*/

//思路：不能按照个数来分割，因为1 1 2 2 2 2这种是满足的，分为11  22  22三组，只是字不同而已。
//先排序，一样的数就分割，并且存储成为一个数组起来。最后的时候判断最短的小数组是谁，看其他数组是不是她的整数倍就可以了。
var ak = (arr) => {
  // 对这副牌进行排序，升序、降序都可以
  arr.sort((a, b) => a - b)
  //找到js允许的最大数
  let min = Number.MAX_SAFE_INTEGER;
  //使用一个数组存储分割好的字符串
  let dst = []
  let result = true
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i])
    for (let j = i + 1; j < len - 1; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if (min > tmp.length) {
          min = tmp.length
        }
        dst.push([].concat(tmp))
        tmp.length = 0
        i = j
        break
      }
    }
  }
  dst.every(item => {
    if (item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
}
console.log(ak([1, 1, 1, 2, 2, 2, 3, 3, 4]));