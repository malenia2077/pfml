// pages/aswCard/aswCard.js
Page({

  /**
     * 页面的初始数据
     */
  data: {
    aswYes: 0,//已做题数
    aswNo: 0,//未做题数
    subAswData: []
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    var noNum = options.noNum;//未做试题总数;
    var yesNum = options.allNum - noNum;//已做题总数
    var dataList = JSON.parse(JSON.parse(options.subAswData));
    this.setData({
      aswYes: yesNum,
      aswNo: noNum,
      subAswData: dataList
    });
  },
  //继续学习
  returnBackAsw: function () {
    wx.navigateBack({
      delta: 2
    })
  },
  subAswData: function () {
    wx.navigateTo({
      url: '/pages/examAfterTip/examAfterTip?subAswData=' + JSON.stringify(JSON.stringify(this.data.subAswData))
    })
  }
})