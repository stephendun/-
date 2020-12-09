// pages/reback/reback.js
Page({
  change: function (e) {
    //当有输入时激活发送按钮，无输入则禁用按钮
    if (e.detail.value != "") {
      this.setData({
        threshold: e.detail.value,
        opacity: 1,
        disabled: false,
        textarea:''
      })
    } else {
      this.setData({
        threshold: 0,
        opacity: 0.4,
        disabled: true,
      })
    }
  },
  change:function(e){
    this.setData({
      textarea:e.detail.value
    })
  },
  send: function () {
        this.setData({
          textarea:''
        })
            wx.showModal({
              title: '提交成功',
              content: `谢谢您的反馈，我们会再接再厉，为您提供更好的服务`
            })
  },
})