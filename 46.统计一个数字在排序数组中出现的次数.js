/**
 * 统计一个数字在排序数组中出现的次数
 */
function GetNumberOfK(data, k)
{
    let number=0;
    for(let i=0;i<data.length;i++){
        if(data[i]==k){
            number++
        }
    }
    return number;
}
console.log(GetNumberOfK([1,2,3,4,5,4,3,2,3,3,4],3))