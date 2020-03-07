/*
 * @Description: 两数之和解析
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-08 10:33:41
 * @LastEditTime: 2019-08-08 16:31:33
 */
//使用暴力破解
function sum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}
//使用假设注册两对情侣在本子上，然后老师按照本子上面的名字去男的，女的听到后站起来就好。
var sum2 = function (nums, target) {
  let res = {}
  for (let i = 0; i < nums.length; i++) { // 每个人登记自己想要配对的人，让主持人记住
    res[target - nums[i]] = nums[i]
  }

  for (let j = 0; j < nums.length; j++) { // 每个人再次报数的时候，主持人看一下名单里有没有他
    if (res[nums[j]] !== undefined) {
      return [j, nums.indexOf(res[nums[j]])]
    }
  }
}
//很容易看出来，上面的方案仍然可以优化。就是每个人都来问一下主持人，自己要找的人有没有来登记过，如果没有的话，就把自己的要求写下来，等着别人来找自己。
var sum3 = function (nums, target) {
  let res = {};
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]] !== undefined) {
      return [res[nums[i]], nums[i]]
    } else {
      res[target - nums[i]] = nums[i]
    }
  }
}


console.log(sum2([1, 4, 2, 7, 11, 15], 9));