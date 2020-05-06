let formatString = function (str) {
  if (typeof (str) != "string") {
    console.log('去除回车换行空格失败！参数不是字符串类型')
    return;
  }
  str = str.replace(/\ +/g, "");//去掉空格
  str = str.replace(/[\r\n]/g, "");//去掉回车换行
  return str;
}

module.exports = {
  formatString: formatString,
}