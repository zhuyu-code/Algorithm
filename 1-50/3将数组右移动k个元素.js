// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 例子1：
// 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
// 输出: [5, 6, 7, 1, 2, 3, 4]
// 解释:
// 向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
// 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
// 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]

// 方法1
function rorateArr(arr,k){
    //判断步数是否大于arr的长度，那就是通过取余数来判断，因为一轮又回到原点；
    var step=k%arr.length;
    var arrstart=arr.slice(0,(arr.length-step));
    var arrend=(arr.slice(step)).reverse();
    var newArr=arrend.concat(arrstart)
    return newArr;
}
console.log(rorateArr([1, 2, 3, 4, 5, 6, 7],3))
//方法2，使用队列的思想
function rorateArr2(arr,k){
    for(let i=0;i<k;i++){
        let v=arr.pop();
        arr.unshift(v)
    }
    return arr;
}
console.log(rorateArr([1, 2, 3, 4, 5, 6, 7],3))