let App = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        wxlogin:false,
        phone:'',//手机号
        code:'',//验证码
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    getPhone(e){
        this.setData({
            phone: e.detail.value
        })
    },
    getCode(e){
      this.setData({
          code: e.detail.value
      })
    },
     /*发送短信*/
    sendCode(){
      let data = {
        code : this.data.code,
        mobile : this.data.phone
      }
      console.log(data)
      // if (!data.code){
      //   App.showError('请输入验证码！');return;
      // }
      App.$post('Sms/send', data,function (result) {
          console.log(result)
        },false,function (callback) {
          console.log(callback)
          wx.hideLoading();
        });
      
    },

    doLogin(){
        let data = {phone: this.data.phone, vcode:this.data.code,type:'phone'}
        App.$post('User/login',data),function(res){
          console.log(res)
        },false,function(){

        }
    },
    wxlogin(){
        this.setData({
          wxlogin:!this.data.wxlogin
        })
    },

/**
* 授权登录
*/
  authorLogin: function (e) {
    let _this = this;
    if (e.detail.errMsg !== 'getUserInfo:ok') {
      return false;
    }
    wx.showLoading({ title: "正在登录", mask: true });
    // 执行微信登录
    wx.login({
      success: function (res) {
        // 发送用户信息
        App.$post('user/login'
          , {
            code: res.code,
            user_info: e.detail.rawData,
            encrypted_data: e.detail.encryptedData,
            iv: e.detail.iv,
            signature: e.detail.signature,
            wxapp_id:10001
          }
          , function (result) {
            // 记录token user_id
            wx.setStorageSync('token', result.data.token);
            wx.setStorageSync('user_id', result.data.user_id);
            // 跳转回原页面
            _this.navigateBack();
          }
          , false
          , function () {
            wx.hideLoading();
          });
      }
    });
  },

  /**
   * 授权成功 跳转回原页面
   */
  navigateBack: function () {
    wx.navigateBack();
    let currentPage = wx.getStorageSync('currentPage');
    wx.redirectTo({
      url: '/' + currentPage.route + '?' + App.urlEncode(currentPage.options)
    });
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