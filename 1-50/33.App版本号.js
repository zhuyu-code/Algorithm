/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-04 19:31:23
 * @LastEditTime: 2019-09-04 20:45:59
 */
function sortVersion(a,b){
  function subStr(a,b){
     const reg1 = /^\d+\.\d+\.\d+$/;
      const reg2 = /^\d+\.\d+$/;
    if ((reg1.test(a) || reg2.test(a)) && (reg1.test(b) || reg2.test(b))) {
      var a1=a.split(".");
      var b1=b.split(".");
      var length=a1.length>b1.length?a1.length:b1.length;
     function mapk(){
      for(let i=0;i<length;i++){
        if(a1[i]>b1[i]){
          return a
        }
      }
      return b
     }
    }else{
      return false;
    }

  }
  if(subStr(a,b)==a){
    return a+","+b;
  }else if(subStr(a,b)==b){
    return b+","+a;
  }else{
    return "输入数字格式不正确"
  }
}
console.log(sortVersion("5.2.00","5.10.0"))