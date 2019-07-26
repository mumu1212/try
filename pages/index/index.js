// pages/index/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        ownCard:false,
        DotStyle:false,
        swiperList: [{
            id: 0,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
        }, {
            id: 1,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        }, {
            id: 2,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
        },],
    },

    /**
     * 挂号跳转
     */
    register: function () {
        wx.navigateTo({
            url: '../outpatientReg/index/index'
        })
    },
    checkIn:function(){
        wx.navigateTo({
            url: '../checkin/checkin'
        }) 
    },
    gotopay:function(){
        wx.navigateTo({
            url: '../gopay/pay',
        })
    },
    gonews:function(){
        wx.navigateTo({
            url: '../index/news/news',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    bindCard(){
        wx.navigateTo({
            url: "/pages/card/index",
        })
    },
    // 医院简介
    profile(){
        wx.navigateTo({
            url: "/pages/guide/introduce",
        })
    },
    showModal(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        })
    },
    hideModal(e) {
        this.setData({
            modalName: null
        })
    },
    switchIcon(){
        wx.navigateTo({
            url: "/pages/card/cardlist/index",
        })
    },
    // 报告查询
    checkReport(){
        wx.navigateTo({
            url: "/pages/report/report",
        })
    },
    log(){
        wx.navigateTo({
            url: "/pages/satisfaction/index",
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

    },
  },
)