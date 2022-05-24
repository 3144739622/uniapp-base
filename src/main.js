import Vue from 'vue'
import App from './App'
import mixin from '@/utils/mixins.js'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.mixin(mixin);
const app = new Vue({
  store,
  ...App
})
app.$mount()
