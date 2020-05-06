// pages/examAsw/examAsw.js
Page({
/**
   * 页面的初始数据
   */
data: {
currentTab:0,
currentTime: "20:00",//分钟
startTime: 20,//分钟
setInter: '',//存储定时器
page:0,
chckTypeNum: 1,
subAswData:[
  {
    aswId: "1",//试题ID
    chckType: 1,//试题类型（1单选，2多选，3简答题）
    aswTitle: " 道德是社会意识形态之一,是人们共同生活及其行为的准则和规范。马克思主义认为道德产生所需要的主客观条件统一于( )",//试题标题
    aswType: "(2017年考研思想道德修养与法律基础试题)",//试卷名称
    aswItem: [//试题选项
      { name: 'USA', value: 'A', text: 'A、人类自我意识的形成与发展' },
      { name: 'CHN', value: 'B', text: 'B、社会关系的形成' },
      { name: 'BRA', value: 'C', text: 'C、生产实践' },
      { name: 'JPN', value: 'D', text: 'D、人类社会的产生' }
    ],
    trueAsw: "C",//正确答案
    analysisTxt: "马克思主义认为道德产生所需要的主客观条件统一于生产实践。",//答案解析
    answerCenter: ""//答案容器
  },
  {
    aswId: "2",//试题ID
    chckType: 2,//试题类型（1单选，2多选，3简答题）
    aswTitle: "2000年12月28日，第九届全国人大常务委员会第十九次会议通过的《维护互联网安全的决定》，从保障互联网的运行安全、维护国家安全和社会稳定、维护社会主义市场经济秩序和社会管理秩序以及保护个人、法人和其他组织的人身、财产等合法权利等方面，规定了网络违法和犯罪行为的法律责任。《维护互联网安全的决定》的基本原则是",//试题标题
    aswType: "(2017年考研思想道德修养与法律基础试题)",//试卷名称
    aswItem: [//试题选项
      { name: 'A', value: 'A', text: 'A、保护个人、法人和其他组织人身、财产等合法权利的原则' },
      { name: 'B', value: 'B', text: 'B、促进网络发展与加强监管相结合的原则' },
      { name: 'C', value: 'C', text: 'C、信息自由与社会公共利益有机结合的原则' },
      { name: 'D', value: 'D', text: 'D、与现代网络发展相适应、与传统法律规范相协调的原则' }
    ],
    trueAsw: "B,C,D",//正确答案
    analysisTxt: "",//答案解析
    answerCenter: ""//答案容器
  },
  {
    aswId: "3",//试题ID
    chckType: 3,//试题类型（1单选，2多选，3简答题）
    aswTitle: "如何理解实践是检验真理的唯一标准",//试题标题
    aswType: "(2019年考研思想道德修养与法律基础试题)",//试卷名称
    aswItem: [],
    trueAsw: "",//正确答案
    analysisTxt: "实践是检验真理的唯一标准，这是由真理的本性和实践的特点决定的。真理的本性就是主观和客观相一致、相符合，检验认识是否具有真理性既不能在主观范围内寻找，也不能在纯粹的客观范围内去解决，只能是把主观与客观联系起来加以比较对照。实践是主观见之于客观的物质活动，具有直接现实性的特点。只有实践才能把主观认识同客观实在联系起来加以对照，从而判明主观与客观是否一致，判明认识是否具有真理性。1978年正是在思想标准问题大讨论上确立了实践是检验真理的唯一标准，解放了人们的思想，推动了马克思主义中国化的进一步深入，既成为改革开放的前奏，也成为中国特色社会主义的前奏，使中国在道路探索上实现了理论创新与实践检验的良性互动。",//答案解析
    answerCenter: ""//答案容器
  }

],
 
actionSheetHidden: true,//答案解析或隐藏
analysisData: [
{
aswId: "",//试题ID
trueAsw: "",//正确答案
analysisTxt: ""//答案解析
}
]
},
 
/**
   * 生命周期函数--监听页面加载
   */
onLoad: function (options) {
this.setData({
page: this.data.subAswData.length
});
this.analysis(0);
this.dateformat(this.data.startTime);
},
 
//滑动切换参数设置
swiperTab: function (e) {
var index = e.detail.current;
this.analysis(index);
this.setData({
currentTab: e.detail.current,
chckTypeNum: this.data.subAswData[index].chckType
});
},
//答案解析赋值
analysis:function(index){
this.data.analysisData[0].aswId = this.data.subAswData[index].aswId;
this.data.analysisData[0].trueAsw = this.data.subAswData[index].trueAsw;
this.data.analysisData[0].analysisTxt = this.data.subAswData[index].analysisTxt;
this.setData({
analysisData: this.data.analysisData
});
},
 
//查看答案解析
actionSheetTap: function () {
this.setData({
actionSheetHidden: !this.data.actionSheetHidden
})
},
//单选赋值
radioChange:function(e){
var idx = e.currentTarget.dataset.idx;
var item = this.data.subAswData[idx].aswItem;
this.data.subAswData[idx].answerCenter = e.detail.value;
for(var i=0;i<item.length;i++){
if (item[i].value == e.detail.value){
item[i].checked = true;
}
}
},
//多选赋值
checkboxChange: function (e) {
var idx = e.currentTarget.dataset.idx;
var item = this.data.subAswData[idx].aswItem;
var values = e.detail.value;
var strValue="";
for (var i = 0; i < item.length; i++) {
item[i].checked = false;
if(values.length>0){
for(var j=0;j<values.length;j++){
if (values[j] == item[i].value){
item[i].checked = true;
strValue += (j == 0 ? item[i].value :','+item[i].value);
}
}
}
}
this.data.subAswData[idx].answerCenter = strValue;
},
//简答题赋值
bindTextAreaBlur: function (e) {
var idx = e.currentTarget.dataset.idx;
this.data.subAswData[idx].answerCenter = e.detail.value;
},
//提交答卷
subAswData:function(){
var data = this.data.subAswData;
var allNum=this.data.subAswData.length;
var noNum=0;
clearInterval(this.data.setInter);//清除定时器
for(var i=0;i<allNum;i++){
if(!data[i].answerCenter){
noNum+=1;
}
}
wx.navigateTo({
url: '/pages/examAfter/examAfter?subAswData=' + JSON.stringify(data) + '&allNum=' + allNum + "&noNum=" + noNum
})
},
// 时间格式转换
dateformat: function(micro) {
var that=this;
var userTimes = micro * 60 * 1000;//总的秒数
var now = new Date().getTime();//现在的时间
var endTime = now + userTimes;//结束的时间
that.data.setInter = setInterval(function () { countdown(endTime); }, 100);
//倒计时的时间
function countdown(endTime) {
var nowTime = new Date().getTime();
var chaTime = endTime - nowTime; //倒计时的时间
if (chaTime >= 0) {
var m = Math.floor(chaTime / 1000 / 60);
var s = Math.floor(chaTime / 1000 % 60);
}
s = s || 0;
var time = (m > 9 ? m : "0" + m) + ":" + (s > 9 ? s : "0" + s);
that.setData({
currentTime: time
});
if (m == 0 && s == 0) {
wx.showModal({
title: '提示',
content: '考试时间结束，请提交答卷!选择取则清除答题结果！',
success: function (res) {
if (res.confirm) {
that.subAswData();
} else if (res.cancel) {
console.log('用户点击取消')
}
}
})
clearInterval(that.data.setInter);
return false;
}
}
}
})