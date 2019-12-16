/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */

 //思路：f(0)=0,f(1)=1,f(2)=2,f(3)=4,f(4)=8...

 function jumpFloorII(number)
{
    // write code here
    if(number==0){
        return 0
    }else if(number==1){
        return 1
    }
    let res=[0,1]
    for(let i=2;i<=number;i++){
        res[i]=2*res[i-1];
  1  }
    return res[number]
}1