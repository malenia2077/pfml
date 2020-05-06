// pages/examAnalysisAll/examAnalysisAll.js
Page({

  /**
     * 页面的初始数据
     */
  data: {
    page: 0,
    chckTypeNum: 1,
    subAswData: []
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    var dataList = JSON.parse(options.subAswData);
    this.setData({
      subAswData: dataList,
      page: dataList.length
    });
  },

})