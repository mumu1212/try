//app.js
App({
 /**
 * 全局变量
 */
  globalData: {
    user_id: null,
  },

  api_root: '', // api地址
  siteInfo: require('siteinfo.js'),


  onLaunch: function() {
    this.setApiRoot();
      wx.getSystemInfo({
          success: e => {
              this.globalData.StatusBar = e.statusBarHeight;
              let custom = wx.getMenuButtonBoundingClientRect();
              this.globalData.Custom = custom;
              this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
          }
      })
  },

/**
 * 当小程序启动，或从后台进入前台显示，会触发 onShow
 */
  onShow(options) {

  },

  /**
   * 设置api地址
   */
  setApiRoot() {
    this.api_root = this.siteInfo.siteroot;
  },

  /**
   * 执行用户登录
   */
  doLogin() {
    // 保存当前页面
    let pages = getCurrentPages();
    if (pages.length) {
      let currentPage = pages[pages.length - 1];
      "pages/login/login" != currentPage.route &&
        wx.setStorageSync("currentPage", currentPage);
    }
    // 跳转授权页面
    wx.navigateTo({
      url: "/pages/login/login"
    });
  },

  /**
   * 当前用户id
   */
  getUserId() {
    return wx.getStorageSync('user_id');
  },

  /**
   * 显示成功提示框
   */
  showSuccess(msg, callback) {
    wx.showToast({
      title: msg,
      icon: 'success',
      success() {
        callback && (setTimeout(function () {
          callback();
        }, 1500));
      }
    });
  },

  /**
   * 显示失败提示框
   */
  showError(msg, callback) {
    wx.showModal({
      title: '友情提示',
      content: msg,
      showCancel: false,
      success(res) {
        // callback && (setTimeout(function() {
        //   callback();
        // }, 1500));
        callback && callback();
      }
    });
  },

  /**
   * get请求
   */
  $get(url, data, success, fail, complete, check_login) {
    wx.showNavigationBarLoading();
    let App = this;
    // 构造请求参数
    data = data || {};
    // if (typeof check_login === 'undefined')
    //   check_login = true;

    // 构造get请求
    let request = function () {
      data.token = wx.getStorageSync('token');
      data.wxapp_id = App.siteInfo.uniacid;
      data.hospital_id = App.siteInfo.hospital_id;
      wx.request({
        url: App.api_root + url,
        header: {
          'content-type': 'application/json'
        },
        data: data,
        success(res) {
          if (res.statusCode !== 200 || typeof res.data !== 'object') {
            console.log(res);
            App.showError('网络请求出错');
            return false;
          }
          if (res.data.code === -1) {
            // 登录态失效, 重新登录
            wx.hideNavigationBarLoading();
            App.doLogin();
          } else if (res.data.code === 0) {
            App.showError(res.data.msg);
            return false;
          } else {
            success && success(res.data);
          }
        },
        fail(res) {
          // console.log(res);
          App.showError(res.errMsg, function () {
            fail && fail(res);
          });
        },
        complete(res) {
          wx.hideNavigationBarLoading();
          complete && complete(res);
        },
      });
    };
    // 判断是否需要验证登录
    check_login ? App.doLogin(request) : request();
  },

  /**
   * post提交
   */
  $post(url, data, success, fail, complete) {
    wx.showNavigationBarLoading();
    let App = this;
    data.token = wx.getStorageSync('token');
    data.wxapp_id = App.siteInfo.uniacid;
    wx.request({
      url: App.api_root + url,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      data: data,
      success(res) {
        if (res.statusCode !== 200 || typeof res.data !== 'object') {
          App.showError('网络请求出错');
          return false;
        }
        if (res.data.code === -1) {
          // 登录态失效, 重新登录
          App.doLogin(function () {
            App.$post(url, data, success, fail);
          });
          return false;
        } else if (res.data.code === 0) {
          App.showError(res.data.msg, function () {
            fail && fail(res);
          });
          return false;
        }
        success && success(res.data);
      },
      fail(res) {
        // console.log(res);
        App.showError(res.errMsg, function () {
          fail && fail(res);
        });
      },
      complete(res) {
        wx.hideLoading();
        wx.hideNavigationBarLoading();
        complete && complete(res);
      }
    });
  },

  /**
   * 验证是否存在user_info
   */
  validateUserInfo() {
    let user_info = wx.getStorageSync('user_info');
    return !!wx.getStorageSync('user_info');
  },

  /**
   * 对象转URL
   */
  urlEncode(data) {
    var _result = [];
    for (var key in data) {
      var value = data[key];
      if (value.constructor == Array) {
        value.forEach(function (_value) {
          _result.push(key + "=" + _value);
        });
      } else {
        _result.push(key + '=' + value);
      }
    }
    return _result.join('&');
  },

})