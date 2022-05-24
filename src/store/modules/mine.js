/* eslint-disable no-undef */
/**
 *   我的
 */
export default {
  state: {
    token: uni.getStorageSync('token') || '', // 用户token
    userDes: 0
  },
  mutations: {
    SETUSERDES(state, userDes) {
      state.userDes = userDes
      uni.setStorageSync('userDes', userDes);
    }
  },
  actions: {
    // 获取用户缴纳的押金
    async GETUSERDES({ commit }) {
      commit('SETUSERDES', '99');
      return 99
    }
  }
}
