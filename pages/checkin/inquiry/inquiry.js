// pages/checkin/inquiry/inquiry.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
        selectData: ['今日', '07-15', '07-11', '07-11', '07-11'],//下拉列表的数据
        index: 0,//选择的下拉列表下标
    },
    // 点击下拉显示框
    selectTap() {
        this.setData({
            selectShow: !this.data.selectShow
        });
    },
    // 点击下拉列表
    optionTap(e) {
        let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
        this.setData({
            index: Index,
            selectShow: !this.data.selectShow
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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