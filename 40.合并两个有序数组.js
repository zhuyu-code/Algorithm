/*
真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
*/
//1.使用双指针办法
function Sum(nums1,m,nums2,n){
    //定义尾索引
    let i=m-1,j=n-1,k=m+n-1;
    //m,n不一定相同，那么就有可能有先完成的，既然是合在nums1,那么nums2先遍历完成，那就无所谓了，nums1先完成就要单独处理nums2
    while(i>=0&&j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i];
            i--;
            k--
        }else{
            nums1[k]=nums2[j];
            j--;
            k--
        }
    }
    //nums1先完成的情况，nums2既然是有序的，那么就可以直接放进去
    while(j>=0){
        nums1[k]=nums2[j];
        j--;
        k--;
    }
    return nums1;
}
console.log(Sum([1,2,3,0,0,0],3,[2,5,6],3))
