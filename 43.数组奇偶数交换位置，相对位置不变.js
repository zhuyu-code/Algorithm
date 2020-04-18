/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

 // 时间复杂度为n2
function OrderArray(array){
    for(let i=0;i<array.length;i++){
        for(j=array.length-1;j>i;j--){
            if(array[j]%2!==0&&array[j-1]%2==0){
                let temp=array[j];
                array[j]=array[j-1];
                array[j-1]=temp;
            }
        }
    }
    return array;
}
 //时间复杂度为n,时间换空间开启两个空间
function reOrderArray(array){
    let arr=[],brr=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2!==0){
            arr.push(array[i])
        }else{
            brr.push(array[i])
        }
    }
    return arr.concat(brr)
}
console.log(OrderArray([2,1,3,4,6,7,9,8]))