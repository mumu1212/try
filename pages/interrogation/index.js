//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        masks: false,
    },
    
    onLoad:function(){
        console.log(this.mask)
    },
    mask(){
        this.setData({
            masks: !this.data.masks
        })
    }
})
