//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

//思路：f(0)=0,f(1)=1,f(2)=1,f(3)=3,f(4)=5,类似斐波拉契数列
function fib(num){
   if(num==0){
       return 0;
   }else if(num==1){
       return 1;
   }
   var res=[0,1];
   for(let i=2;i<=num;i++){
       res[i]=res[i-1]+res[i-2];
   }
   return res[num]
}
console.log(fib(3))