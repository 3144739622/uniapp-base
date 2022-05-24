/* eslint-disable no-undef */
import { request } from "@/config.js";

const http = (url, data = {}, method, header = {}) => {
  if (!data.requestLoading) {
    uni.showLoading({
      title: '加载中'
    });
  }
  return new Promise((resolve) => {
    resolve();
    // let token = uni.getStorageSync("token");
    // if (token) {
    //   header['token'] = token;
    //   resolve();
    // } else if (url.indexOf('login') > 0) {
    //   resolve();
    // } else {
    //
    // }
  }).then(() => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: request + url, // 仅为示例，并非真实接口地址。
        data: data,
        method: method || 'GET',
        header: {
          "content-type": "application/json", // 默认值
          ...header
        },
        dataType: "json",
        success(res) {
          // let pages = getCurrentPages();
          if (res.data.code != 1 && !data.requestToast) {
            uni.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
          resolve(res.data);
        },
        fail(res) {
          reject(res.data);
        },
        complete() {
          if (!data.requestLoading) {
            uni.hideLoading();
          }
        }
      });
    })
  })
}

export { http };