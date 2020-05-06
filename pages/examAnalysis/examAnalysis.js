// pages/examAnalysis/examAnalysis.js
Page({

  /**
     * 页面的初始数据
     */
  data: {
    currentTab: 0,
    page: 0,
    chckTypeNum: 1,
    subAswData: []
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    var dataList = JSON.parse(options.subAswData);
    var errList = [];
    for (var i = 0; i < dataList.length; i++) {
      if (dataList[i].chckType == 1 || dataList[i].chckType == 2) {//筛选错题未做题
        if (dataList[i].trueAsw == dataList[i].answerCenter) {
        }
        else {
          errList.push(dataList[i]);
        }
      }
      else {
        if (!dataList[i].answerCenter) {
          errList.push(dataList[i]);
        }
      }
    }
    this.setData({
      subAswData: errList,
      page: errList.length
    });
  },
  //滑动切换参数设置
  swiperTab: function (e) {
    this.setData({
      currentTab: e.detail.current,
      chckTypeNum: this.data.subAswData[e.detail.current].chckType
    });
  }
})