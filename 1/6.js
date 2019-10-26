// 数组乱序，洗牌算法

let disorder=(arr)=>{
  let length=arr.length;
  let current=length-1;
  let random;
  while(current>-1){
    random=Math.floor(length*Math.random());
    [arr[current],arr[random]]=[arr[random],arr[current]];
    current--;
  }
  return arr;
}
console.log(disorder([1,2,3,4,5,6]))