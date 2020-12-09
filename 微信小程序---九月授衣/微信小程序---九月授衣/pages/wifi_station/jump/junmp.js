// pages/wifi_station/jump/junmp.js

const devicesId = "642915828" // 填写在OneNet上获得的devicesId 形式就是一串数字 例子:9939133
const api_key = "koASy6YY=fP1RUVU=RSt2=uDKUA=" // 填写在OneNet上的 api-key 例子: VeFI0HZ44Qn5dZO14AuLbWSlSlI=
Page({
  data: {
    text1: '',
    text2: ''
  },
  jump: function () {
    wx.navigateTo({
      url: '../tianqi/tianqi',
    })
  },
  onLoad: function () {
    this.getDatapoints().then((datapoints) => {
      wx.hideLoading()
      this.firstDraw(datapoints)
    }).catch((err) => {
      wx.hideLoading()
      console.error(err)
      clearInterval(timer) //首次渲染发生错误时禁止自动刷新
    })
  },
  getDatapoints: function () {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `https://api.heclouds.com/devices/${devicesId}/datapoints?datastream_id=Temperature,Humidity&limit=20`,
        /**
         * 添加HTTP报文的请求头, 
         * 其中api-key为OneNet的api文档要求我们添加的鉴权秘钥
         * Content-Type的作用是标识请求体的格式, 从api文档中我们读到请求体是json格式的
         * 故content-type属性应设置为application/json
         */
        header: {
          'content-type': 'application/json',
          'api-key': api_key
        },
        success: (res) => {
          const status = res.statusCode
          const response = res.data

          if (status !== 200) { // 返回状态码不为200时将Promise置为reject状态
            reject(res.data)
            return;
          }
          if (response.errno !== 0) { //errno不为零说明可能参数有误, 将Promise置为reject
            reject(response.error)
            return;
          }

          if (response.data.datastreams.length === 0) {
            reject("当前设备无数据, 请先运行硬件实验")
          }

          //程序可以运行到这里说明请求成功, 将Promise置为resolve状态
          resolve({
            temperature: response.data.datastreams[0].datapoints.reverse(),
            humidity: response.data.datastreams[1].datapoints.reverse(),

          })
          console.log(response.data.datastreams[0].datapoints[0].value)
          console.log(response.data.datastreams[1].datapoints)
          this.setData({
            text1:response.data.datastreams[0].datapoints[0].value,
            text2:response.data.datastreams[1].datapoints[0].value
          })
        },

        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  firstDraw: function (datapoints) {

    //得到屏幕宽度
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }


  },
})