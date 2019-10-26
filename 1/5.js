/*
随机生成一个长度为 10 的整数类型的数组，
例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，
例如 [[2, 3, 4, 5], [10, 11], [20]]。
*/
//分析题意，新数组的形式是去重后，将是否挨着的为一个等级进行内部括号排列

//得到一个给定范围的随机整数
let randoms=(min,max)=>{
  let mink=Math.ceil(min);
  let maxk=Math.floor(max);
  return Math.floor(Math.random()*(maxk-mink+1))+mink;
}

//随机生成10个整数数组
let arrk=(length,min,max)=>{
  let arr=[];
  for(let i=0;i<length;i++){
    arr.push(randoms(min,max))
  }
  return arr;
}

//给数组去重排序
let AscArr=(arr)=>{
  let arrk=arr.sort((a,b)=>{
    return a-b;
  })
  let set = new Set(arrk);
  return Array.from(set)
}

//给数组里的数进行分类
let conArr=(arr)=>{
  return arr.reduce(
    (acc, c, i, arr) => {
      if (i === 0) acc[0].push(c)
      else {
        if (arr[i - 1] !== c - 1) acc.push([])
        acc[acc.length - 1].push(c)
      }
      return acc
    },
    [[]]
  )
}
let sum=(min,max,length)=>{
   var arr= arrk(min,max,length);
   let con=conArr(AscArr(arr))
  return con
}
console.log(sum(10,2,30))