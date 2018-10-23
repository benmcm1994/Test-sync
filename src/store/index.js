import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
import sidebar from './modules/sidebar'
import auth from './modules/auth'
import users from './modules/users'
import signals from './modules/signals'
import accounts from './modules/accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    counter,
    sidebar,
    users,
    signals,
    accounts
  }
})