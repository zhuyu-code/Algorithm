/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
 * 超过数组长度的一半，因此输出2。如果不存在则输出0。
 */
function MoreThanHalfNum_Solution(numbers)
{
    let obj={};
    for(let i=0;i<numbers.length;i++){
        if(obj[numbers[i]]){
            obj[numbers[i]]=obj[numbers[i]]+1
        }else{
            obj[numbers[i]]=1;
        }
      
    }
    for(let key in obj){
        if(obj[key]>(numbers.length)/2){
            return key
        }
    }
    return 0;
}
console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))