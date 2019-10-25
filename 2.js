// 统计 1 ~ n 整数中出现 1 的次数
// 在输入框中如何判断输入的是一个正确的网址。
function testUrl(url){
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false
    }
}
console.log(testUrl("http://sss"));
console.log(testUrl("httpsd"));