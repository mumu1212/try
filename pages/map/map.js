// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude: '',
        longitude: '',
        scale: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.locationGet()
    },

    locationGet() {
        wx.getSetting({
            success: (res) => {
                // console.log(res.authSetting['scope.userLocation'])
                if (res.authSetting['scope.userLocation'] == undefined && res.authSetting['scope.userLocation'] != true) {
                    wx.showModal({
                        title: '是否授权当前位置',
                        content: '需要获取您的地理位置，请确认授权，否则地图定位功能将无法使用',
                        success: function(res) {
                            if (res.cancel) {
                                console.info("1授权失败返回数据");

                            } else if (res.confirm) {
                                wx.openSetting({
                                    success: function(data) {
                                        if (data.authSetting["scope.userLocation"] == true) {
                                            wx.showToast({
                                                title: '授权成功',
                                                icon: 'success',
                                                duration: 5000
                                            })
                                            wx.openLocation({
                                                latitude: this.data.latitude,
                                                longitude: this.data.longitude,
                                                scale: 28
                                            })
                                        } else {
                                            wx.showToast({
                                                title: '授权失败',
                                                icon: 'error',
                                                duration: 5000
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    })
                } else {
                    wx.getLocation({
                        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
                        success(res) {
                            const latitude = res.latitude
                            const longitude = res.longitude
                            wx.openLocation({
                                latitude,
                                longitude,
                                scale: 18
                            })
                        }
                    })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})