//index.js
//获取应用实例
const app = getApp()

var common = require('modelA.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    msg: "hello,yurixin",
    nowTime: (new Date()).toString(),
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' }
    ],
    numberArray: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-06-18'
    },
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 不用在data里定义也可以用msg1
    this.setData({msg1: 'hh'})

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
/*my test */
  helloMINA: function () {
    common.sayHello()
  },
  //改变msg的信息
  clickMe(){
    this.setData({msg: 'oh, you clicked the button!'})
    var multiplyBy2 = require('./modelA')
    console.log(multiplyBy2(2))
    // common.sayHello()
    // common.sayGoodBye()
    // 全局变量
    var appInstance = getApp()
    console.log(appInstance.globalData.myTestGlobal)
  },
  //调用二维码的按钮
  scanCodeClicked(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  //混乱switch的排序
  switch: function(e) {
    const length = this.data.objectArray.length
    for(let i = 0; i < length; ++i){
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique' + length}].concat(this.data.objectArray)
    // this.data.objectArray = this.data.objectArray.concat([{ id: length, unique: 'unique' + length }])
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  handletap: function(evt) {
    console.log(evt.target)
    console.log(evt.currentTarget)
  },
  handleBindtap: function(e) {
    console.log(e)
  },
  handleLongtap: function(e) {
    console.log("this is handleLongtap")
    wx.request({
      url: 'https://test.com/getinfo',
      success: function (res) {
        console.log(res)// 服务器回包信息
      }
    })
  },
  /*事件绑定与冒泡捕获*/
  handletap1: function(e) {
    console.log("handletap1")
  },
  handletap2: function (e) {
    console.log("handletap2")
  },
  handletap3: function (e) {
    console.log("handletap3")
  },
  handletap4: function (e) {
    console.log("handletap4")
  },
  
  /***************************/
/************ */

})
