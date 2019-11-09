
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