/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
const arr=[
    [1,3,5,7,9],
    [2,4,6,8,10],
    [3,6,9,12,15],
    [4,8,12,16,20]
]
function Find(target,arr){
    let yLen=arr[0].length-1;
    let xLen=arr.length-1;
    let j=0;
    let i=xLen;
    while(j<=yLen&&i>=0){
        if(arr[i][j]>target){
            i--;
        }else if(arr[i][j]<target){
            j++
        }else{
            return true;
        }
    }
    return false
}