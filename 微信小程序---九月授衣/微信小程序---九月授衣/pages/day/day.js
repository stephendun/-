// pages/day/day.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    arr: ['无论你昨天多么的迷茫，今天再太阳升起的时候，请相信，努力的人都有他的回报，早晨好！', ' 眼中有美，心中有爱，遇见美好，迎来明天，每一天都是春暖花开！', ' 真正的生命，春不艳秋不凋；真正的情义，贵时不重贫时不轻；真正的祝福情真意切韵味悠长，祝你新的一天愉快！', '不要为小事遮住视线，我们还有更大的世界。', '坚持不懈的爬到顶峰，便精彩，即使大汗淋漓，也值得。', '不是每一个人，都能成为圣人，伟人，平凡的人，有不平凡的经历，不甘平庸，平凡的人，也会有不一样的人生，生活也照样精彩绝伦。就算没有人为我们鼓掌，也要学会自我欣赏。', '务须咬牙厉志，蓄其气而长其志，切不可恭然自馁也', '精诚所至，金石为开。', ' 男儿不展风云志，空负天生八尺躯。', ' 欲戴王冠，必承其重。']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr2=this.data.arr
    var index = Math.floor((Math.random()*arr2.length));
    this.setData({
      text:this.data.arr[index]
    })
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