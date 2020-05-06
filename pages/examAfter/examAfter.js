Page({

  /**
     * 页面的初始数据
     */
  data: {
    allNum: 0,//试题总数
    noNum: 0,//未做试题总数
    subAswData: ""
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    this.setData({
      allNum: options.allNum,
      noNum: options.noNum,
      subAswData: options.subAswData
    });
  },

  //查看答题卡
  lookCard: function () {
    wx.navigateTo({
      url: '/pages/aswCard/aswCard?subAswData=' + JSON.stringify(this.data.subAswData) + '&allNum=' + this.data.allNum + "&noNum=" + this.data.noNum
    })
  },
  //交卷
  subAswData: function () {
    wx.navigateTo({
      url: '/pages/examAfterTip/examAfterTip?subAswData=' + JSON.stringify(this.data.subAswData)
    })
  }
})