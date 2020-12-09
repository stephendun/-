// pages/wenzi/wenzi.js
// pages/index/index.js

Page({
  data: {
    height: '',
    weight: '',
    bmi: 'BMI',
    info: '健康提示',
    a2: ''
  },
  heightInput(e) {
    this.setData({
      height: e.detail.value
    })
  },
  weightInput(e) {
    this.setData({
      weight: e.detail.value
    })
  },
  bmi: function (event) {
    var weightnum = this.data.weight
    var heightnum = this.data.height
    console.log(heightnum)
    console.log(weightnum)
    // var bmi=(weightnum/(heightnum/100)/(heightnum/100)).toFixed(2)
    var bmi = (weightnum / (heightnum * heightnum)).toFixed(2) 
    var info = ""
    console.log(bmi)
    if (bmi < 18.5) {
      info = "过轻，加强营养！"
    } else if (bmi >= 18.5 && bmi < 23.9) {
      info = "正常，继续保持！"
    } else if (bmi >= 23.9 && bmi < 27.9) {
      info = "超重，加强锻炼!"
    } else if (bmi >= 27.9) {
      info = "肥胖，提高警惕！"
    }
    var bmi = ' BMI指数为：' + (weightnum / (heightnum * heightnum)).toFixed(2) 
    this.setData({
      bmi: bmi,
      info: info
    })

    wx.showModal({
      title: '健康提示',
      content:  bmi + info,
      success: function (res) {
        if (res.confirm) {
          console.log('点击确认回调')
        } else {
          console.log('点击取消回调')
        }
      }
    })

  }
})

/*Page({

  /**
   * 页面的初始数据
   */
/* data: {
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
    items: [
      { name: 'MAN', value: 'MAN', checked: 'ture' },
      { name: 'WOMAN', value: 'WOMAN' },
    ]
  },

  
  change: function (e) {
    //当有输入时激活发送按钮，无输入则禁用按钮
    if (e.detail.value != "") {
      this.setData({
        threshold: e.detail.value,
        opacity: 1,
        disabled: false,
      })
    } else {
      this.setData({
        threshold: 0,
        opacity: 0.4,
        disabled: true,
      })
    }
  }
})*/