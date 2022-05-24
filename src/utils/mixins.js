/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
export default {
  data() {
    return {
      isWx: false,
      // #ifdef MP-WEIXIN
      isWx: true,
      // #endif
      commonImgUrl: 'https://qiniu.pisenpower.com/'
    }
  },
  methods: {
    // 图片路径
    commonImgUrlFn(name, tp) {
      return `${this.commonImgUrl}${name}.${tp || 'png'}?imageslim&a=13`;
    },
    // 页面跳转
    commonHandleTo(url, type = 'navigateTo') {
      uni[type]({ url })
    }
  }
}
