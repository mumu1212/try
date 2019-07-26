// pages/outpatientReg/doctorlist/doctorlist.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        datatime:[
            { 'xingqi': '星期一', 'shijian': '07-11' },
            { 'xingqi': '星期二', 'shijian': '07-12' },
            { 'xingqi': '星期三', 'shijian': '07-13' },
            { 'xingqi': '星期四', 'shijian': '07-14' },
            { 'xingqi': '星期五', 'shijian': '07-15' },
            { 'xingqi': '星期六', 'shijian': '07-16' },
            { 'xingqi': '星期日', 'shijian': '07-17' },
        ],
        currenIndex: 0,

        
    },
    doctorinfo:function() {
        console.log("111")
        wx.navigateTo({
            url: '../doctorinfo/doctorinfo'
        })
    },
    /**
     * 时间列表点击事件
     */
    activeNav(e) {
        this.setData({
            currenIndex: e.currentTarget.dataset.index 
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(this.data.datatime)
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