/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 */
function PrintMinNumber(numbers)
{
    let arr=numbers.sort(compare);
    return arr.join('');
}
//比较两个整数排列顺序
function compare(a,b){
    let m=a+""+b;
    let n=b+""+a;
    if(parseInt(m)>=parseInt(n)){
        return 1
    }else{
        return -1;
    }
}
console.log(PrintMinNumber([3,32,321]))