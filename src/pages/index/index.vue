<template>
  <view class="content">
    首页 {{ title }} {{ isWx }}
    <text class="style-box">我是样式</text>
    <uni-icons type="contact" size="30" />
    <uni-list>
      <uni-list-item title="列表文字"></uni-list-item>
      <uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
      <uni-list-item :disabled="true" title="列表禁用状态"></uni-list-item>
    </uni-list>
  </view>
</template>

<script>
import { depositGet, getByUseing } from "@/service/mine.js";
export default {
  data() {
    return {
      title: '你好'
    }
  },
  onLoad() {
    this.init();
  },
  methods: {
    init() {
      this.getData();
      this.getByUse();
    },
    getData() {
      depositGet({ systemType: 25, requestLoading: true }).then(res => {
        console.log('depositGet', res);
      })
    },
    getByUse() {
      getByUseing().then(res => {
        console.log('getByUseing', res);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  color: red;
  .style-box {
    color: green;
    font-size: 44upx;
    font-weight: bold;
  }
}
</style>
