// pages/user/payHistory/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        TabCur: 0,
        scrollLeft: 0,
        tab: ['门诊缴费', '门诊缴费记录'],
        switchTab:true
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    tabSelect(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
            switchTab: !this.data.switchTab
        }) 
    },
    showModal(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        })
    },
goPay(){
    wx.navigateTo({
        url: "/pages/user/payHistory/goPay",
    })
},
    showModal(e) {
        modalName: e.currentTarget.dataset.target
    },
    hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items
    })
  },
  checkHistory(){
      wx.navigateTo({
          url: "/pages/user/payHistory/history",
      })
  },
    // ListTouch触摸开始

    // ListTouchStart(e) {
    //     this.setData({
    //         ListTouchStart: e.touches[0].pageX
    //     })
    // },

    // ListTouch计算方向

    // 向左滑动
    // ListTouchMove(e) {
    //     this.setData({
    //         ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    //     })
    // },

    // ListTouch计算滚动

    // ListTouchEnd(e) {
    //     if (this.data.ListTouchDirection == 'left') {
    //         this.setData({
    //             modalName: e.currentTarget.dataset.target
    //         })
    //     } else {
    //         this.setData({
    //             modalName: null
    //         })
    //     }
    //     this.setData({
    //         ListTouchDirection: null
    //     })
    // },

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