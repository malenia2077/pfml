// pages/examAfterTip/examAfterTip.js
Page({

  /**
     * 页面的初始数据
     */
  data: {
    subAswData: [],//试题数据
    aswFalse: 0,//错误选择题数
    aswTrue: 0,//正确选择题数
    aswAccNum: 0,//正确率
    aswYes: 0,//已做简答题数
    aswNo: 0,//未做简答题数
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    var dataList = JSON.parse(JSON.parse(options.subAswData));
    var aswFalse = 0, aswTrue = 0, aswAllNum = 0, aswYes = 0, aswNo = 0, aswAccNum = 0;
    for (var i = 0; i < dataList.length; i++) {
      if (dataList[i].chckType == 1 || dataList[i].chckType == 2) {//选择题计算
        aswAllNum += 1;
        if (dataList[i].trueAsw == dataList[i].answerCenter) {
          aswTrue += 1;
        }
        else {
          aswFalse += 1;
        }
      }
      else {//简答题计算
        if (!!dataList[i].answerCenter) {
          aswYes += 1;
        }
        else {
          aswNo += 1;
        }
      }
    }
    aswAccNum = (aswTrue / aswAllNum) * 100;
    this.setData({
      aswFalse: aswFalse,//错误选择题数
      aswTrue: aswTrue,//正确选择题数
      aswAccNum: aswAccNum,//总选择题数
      aswYes: aswYes,//已做简答题数
      aswNo: aswNo,//未做简答题数
      subAswData: dataList
    });
  },
  //查看全部试题解析
  examAnalysisAll: function () {
    wx.navigateTo({
      url: '/pages/examAnalysisAll/examAnalysisAll?subAswData=' + JSON.stringify(this.data.subAswData)
    })
  },
  //查看错题解析
  examAnalysis: function () {
    wx.navigateTo({
      url: '/pages/examAnalysis/examAnalysis?subAswData=' + JSON.stringify(this.data.subAswData)
    })
  },
//结束答题并返回
test: function () {
  wx.switchTab({
    url: '../index/index'
  })
}
})