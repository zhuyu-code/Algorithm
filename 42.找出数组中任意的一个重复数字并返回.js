function duplicate(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            return arr[i];
        }
        map.set(arr[i],i);
    }
    return "没有发现内容"
}
console.log(duplicate([2,3,1,0,2,5,3]))
