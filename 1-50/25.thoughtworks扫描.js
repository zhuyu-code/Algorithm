

/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-16 10:15:06
 * @LastEditTime: 2019-09-16 15:39:35
 */
//横向扫描
class Horizontal{
  constructor(width,height,data){
    this.width=width;
    this.height=height;
    this.data=data
  }
  render(){
    var arr=[];
    var arr1=[];
    var arr2=[];
    var arr3=[];
    if(this.data.length!==this.width*(Math.ceil(this.height/3))){
      return "输入数据有问题，请检查输入"
    }
    for(let i=0;i<this.data.length;i++){
      arr1.push(this.data[i][1]);
      arr2.push(this.data[i][0]);
      arr3.push(this.data[i][3]);
      if((i+1)%this.width==0){
       var rowIndex=Math.ceil((i+1)/this.width);
        //判断是this.height是3的整数倍或者不是最后一行也行
        if(rowIndex<Math.ceil(this.height/3)||(this.height%3==0)){
          if(rowIndex%2!==0){
            arr.push(arr1,arr2,arr3);
            arr1=[];
            arr2=[];
            arr3=[];
          }else{
            arr.push(arr1.reverse(),arr2.reverse(),arr3.reverse());
            arr1=[];
            arr2=[];
            arr3=[];
          }
        }
         //如果最后一行且只有一列数据,选择上面做为填充
         if(rowIndex==Math.ceil(this.height/3)&&this.height%3==1){
           if(rowIndex%2!==0){
             arr.push(arr1);
           }else{
             arr.push(arr1.reverse())
           }
         }
         //如果是最后一行，并且有两列数据，选择上面做填充
         if(rowIndex==Math.ceil(this.height/3)&&this.height%3==2){
           if(rowIndex%2!==0){
             arr.push(arr1,arr2)
           }else{
             arr.push(arr1.reverse(),arr2.reverse())
           }
         }
      }
    }
    return arr;
  }
}
var h=new Horizontal(6,3,['RGRF-','RFGFR','GFGFR','GFFGFG','GFRFG','RF-FG']);
var h2=new Horizontal(5,2,['RGR--','RFG-R','GFG-R','GFG-G','GF--G']);
var h3=new Horizontal(4,6,['RFGF-','GRFFR','FRGFG','GR-FF','GR-FF','FRGFG','GRFFR','RFGF-'])
console.log(h2.render());
//纵向扫描
class Longitudinal{

}