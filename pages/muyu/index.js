const LOCALSTROAGE_MUYU_COUNT_KEY = 'muyuCount'

Page({
  data: {
    count: 0,
    tipsActive: false,
    imgActive: false,
  },
  onLoad() {
    wx.getStorage({
      key: LOCALSTROAGE_MUYU_COUNT_KEY,
      success: (e) => {
        this.setData({ count: e.data })
      }
    })
  },
  onUnload() {
    wx.setStorage({
      key: LOCALSTROAGE_MUYU_COUNT_KEY,
      data: this.data.count,
    })
  },
  playClickMusic() {
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplenent: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。
    })
    innerAudioContext.src = '/assets/audio/muyu.mp3'
    innerAudioContext.play()
  },
  onMuyuClick() {
    this.setData({
      count: this.data.count + 1,
      tipsActive: true,
      imgActive: true,
    }, () => {
      setTimeout(() => {
        this.setData({
          tipsActive: false,
          imgActive: false,
        })
      }, 300)
    })
    this.playClickMusic()
  }
})