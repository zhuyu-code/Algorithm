/*
已知如下数组：

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */
//数组扁平化
let flatSort=(arr)=>{
  let result=[];
  for(let i=0,len=arr.length;i<len;i++){
    if(Array.isArray(arr[i])){
        result=result.concat(flatSort(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result;
}
//数组去重
let repeats=(arr)=>{
  let set=new Set(arr);
  return Array.from(set);
}
//数组升序
let AscSort=(arr)=>{
  return arr.sort((a,b)=>{
    return a-b;
  })
}
let solve=(arr)=>{
  return AscSort(repeats(flatSort(arr)))
}
console.log(solve([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]))