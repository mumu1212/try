// pages/satisfaction/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userStars:[
            'cuIcon-favorfill',
            'cuIcon-favor',
            'cuIcon-favor',
            'cuIcon-favor',
            'cuIcon-favor'
        ],
        rate:[
            { name:'满意',checked:true},
            { name: '基本满意', checked: false },
            { name: '不满意', checked: false },
        ],
        name:'满意'
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    starTap(e)
    {
        let index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
        // console.log(index)
        let tempUserStars = this.data.userStars; // 暂存星星数组
        let len = tempUserStars.length; // 获取星星数组的长度
        for (let i = 0; i < len; i++) {
            if (i <= index) { // 小于等于index的是满心
                tempUserStars[i] = 'cuIcon-favorfill'
            } else { // 其他是空心
                tempUserStars[i] = 'cuIcon-favor'
            }
        }
        // console.log(tempUserStars)
        // 重新赋值就可以显示了
        this.setData({
            userStars: tempUserStars
        })
    },
    radioChange(res){
        // console.log("选中的标签：" + res.detail.value);
        var arrs = this.data.rate;
        var that = this;
        for (const x in arrs) {
            if (arrs[x].name == res.detail.value) {
                arrs[x].checked = true;
            } else {
                arrs[x].checked = false;
            }
        }

        that.setData({
            rate: arrs
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

    }
})