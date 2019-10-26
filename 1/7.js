/*
 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'
*/
 let UppLow=(str)=>{
   let arr=str.split('');
   let new_arr=arr.map((item)=>{
     return item===item.toUpperCase()?item.toLowerCase():item.toUpperCase();
   })
   return new_arr.join('');
 }
 console.log(UppLow('Abs'));
 