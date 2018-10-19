import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import sidebar from './modules/sidebar'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    counter,
    sidebar
  }
})