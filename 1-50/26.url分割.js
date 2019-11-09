/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-16 09:37:38
 * @LastEditTime: 2019-09-16 10:13:46
 */
//方法1
function urlParse(url){
  var str=url.split("?")[1];
 var strArr= str.split("&");
 var obj={};
 for(let i=0,len=strArr.length;i<len;i++){
   var key=strArr[i].split("=")[0];
   var value=strArr[i].split("=")[1 ]
   obj[key]=value;
 }
 return obj;
}
console.log(urlParse('http:?name=zhuyu&age=21'));
//方法2
function urlParse2(url){
  var str=url.split("?")[1];
 var strArr= str.split("&");
 var obj=strArr.reduce((obj,item)=>{
 var key=item.split("=")[0];
 var value=item.split("=")[1];
  obj[key]=value;
  return obj;
 },{});
 return obj;
}
console.log(urlParse2('http:?name=zhuyu&age=21'));