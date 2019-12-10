/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

//思路选择矩阵左下角向上递减，向右递增
function fn(arr,target){
    var lenX=arr.length;
    var lenY=arr[0].length;
    for(let i=lenX-1,j=0;i>=0&&j<lenY;){
        if(target>arr[i][j]){
            j++
        }else if(target<arr[i][j]){
            i--;
        }else{
            return true;
        }
    }
    return false
}