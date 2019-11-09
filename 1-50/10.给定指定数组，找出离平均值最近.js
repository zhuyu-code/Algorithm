/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-16 09:22:38
 * @LastEditTime: 2019-09-16 09:36:43
 */
function At(arr){
  sortArr=arr.sort((a,b)=>{
    return a-b;
  });
  var sum=arr.reduce((sum,item)=>{
    return sum+=item
  },0)
var avg=sum/arr.length;
function getValue(){
  for(let i=0,length=arr.length;i<length;i++){
    if(sortArr[i]==avg){
      return sortArr[i]
    }
    if(sortArr[i]>avg){
      if((sortArr[i]-avg)>(avg-sortArr[i-1])){
        return sortArr[i-1]
      }else if((sortArr[i]-avg)<(avg-sortArr[i-1])){
        return sortArr[i];
      }else{
        return [sortArr[i-1],sortArr[i]]
      }
      
    }
  }
  
}
return getValue();
}
console.log(At([1,2,3,4,5]))