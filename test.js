let twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==target-nums[j]){
                return [i,j]
            }
        }
    }
};
let nums = [2, 7, 11, 15], target = 13
console.log(twoSum(nums,target));