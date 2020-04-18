/**
 * 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
 */
function FindNumsAppearOnce(array)
{
    let arr=[];
    for(let i=0;i<array.length;i++){
        if(array.indexOf(array[i])===array.lastIndexOf(array[i])){
            arr.push(array[i])
        }
    }
    return arr;
}
console.log(FindNumsAppearOnce([1,2,2,3,4,5,1,3]))