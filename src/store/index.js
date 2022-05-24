import Vue from 'vue'
import Vuex from 'vuex'
import mine from './modules/mine'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    mine
  },
  state: {
  }
})

export default store
