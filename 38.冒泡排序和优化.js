//冒泡排序
//原理：第一个和下一个比较分出大小并且按照排序方式交换，然后第二个和第三个比较，直到分出大小。
function checkArray(array) {
    return Array.isArray(array)
}
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
function buddle(arr){
    for(let i=arr.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr;
}
function buddle2(arr){
    let flag=true;
    for(let i=arr.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                flag=false;
                swap(arr,j,j+1)
            }
        }
        if(flag){
            break;
        }
    }
    return arr;
}

var arr1=[1,2,2,3,4,5,6]

console.time("基础冒泡:");
console.log(buddle(arr1))
console.timeEnd("基础冒泡:")

console.time("基础冒泡2:");
console.log(buddle2(arr1))
console.timeEnd("基础冒泡2:")