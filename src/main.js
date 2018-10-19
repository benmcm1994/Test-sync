//vue imports
import Vue from 'vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
//component imports
import Base from './components/layout/Base.vue'
//frontend framework
import Vuetify from 'vuetify'
//icons
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.config.productionTip = false

Vue.use(Vuetify, VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(Base)
}).$mount('#app')
