/*大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39*/

//1.递归法，很有可能时间复杂度不能通过
/*
递归效率低：
函数开销：在一个函数调用之前需要做许多工作，比如准备函数内局部变量使用的空间、搞定函数的参数等等，
这些事情每次调用函数都需要做，因此会产生额外开销导致递归效率偏低，所以逻辑上开销一致时递归的额外开销会多一些
*/
function Fibonacci(n)
{
    if(n>39){
        return "超过大小";
    }
    if(n==0){
        return 0;
    }
     else if(n==1||n==2){
            return 1;
        }else{
            return Fibonacci(n-1)+Fibonacci(n-2);
        }
}
console.log(Fibonacci(4))
//不用递归的形式
//使用迭代的思想进行操作
function Fibonacci2(n){
    if(n==0){
        return 0;
    }else if(n==1||n==2){
        return 1
    }else{
        let res=[0,1,1]
        for(let i=3;i<=n;i++){
            res[i]=res[i-1]+res[i-2]
        }
        return res[n]
    }
}
console.log(Fibonacci2(4))
