// pages/out/out.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var nickname = options.nickname;
    this.setData({
      nickname : nickname
    })
  },

  return_main: function (){
    wx.navigateTo({
      url:'../index/index?nickname=' + this.data.nickname,
      })      //结束后的回调(成功，失败都会执行)
  },

  pmp_exam: function (){
    wx.navigateTo({
      url:'../pmp/pmp?nickname=' + this.data.nickname,
      })      //结束后的回调(成功，失败都会执行)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
