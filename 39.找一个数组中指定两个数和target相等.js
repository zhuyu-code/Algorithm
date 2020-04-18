/*
真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例: 给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
*/
//1.老办法
function Sum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
}
console.log(Sum([2,1,2,7,11,15],9))
//2.使用Map思想，空间换时间
/**思想就是每次遍历数组的时候，将值，索引当作key,value存入Map,然后每次判断target-遍历的值是否等于Map中的内容 */
function Sum2(arr,target){
    //使用obj模拟Map
    let obj={}
    for(let i=0;len=arr.length,i<len;i++){
        if(obj[target-arr[i]]!==undefined){
            return [obj[target-arr[i]],i]
        }
        if(obj[arr[i]]==undefined)//注意判断，不然重复的内容就不行了，后面的要覆盖前面的。
            {
                obj[arr[i]]=i
            }
        
    }
}
console.log(Sum2([2,1,2,7,11,15],9))
//3.使用真正的Map来做
function Sum3(arr,target){
    const map=new Map();
    for(let i=0;len=arr.length,i<len;i++){
        if(map.get(target-arr[i])!==undefined){
            return [map.get(target-arr[i]),i];
        }
        if(!map.has(arr[i])){
            map.set(arr[i],i);
        }
        
    }
}
console.log(Sum3([2,1,2,7,11,15],9))