// start.js

Page({
    data: {

    },
    //跳转到天气页面
    navigate: function() {
        wx.navigateTo({
            url: '../wifi_station/jump/junmp',
        })
    },
  
     wenzi:function(){
        wx.navigateTo({
            url:'../BMI/wenzi',
        })
     },
     jump:function(){
        wx.navigateTo({
            url:'../day/day',
        })
     },
     jump2:function(){
        wx.navigateTo({
            url:'../reback/reback',
        })
     },
})
