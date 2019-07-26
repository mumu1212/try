// pages/report/report.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        switchTab:true,
        tab:['报告查询','历史报告查询'],
        changeTab:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    // 页面切换
    tabSelect(e){
        this.setData({
            changeTab: e.currentTarget.dataset.id,
            switchTab: !this.data.switchTab
        })
    },
    checkHistory(){
        
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