import axios from 'axios'

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {}
};

const mutations = {
  login_request(state) {
    state.status = "loading";
  },

  login_success(state, { token, user }) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },

  login_error(state) {
    state.status = "error";
  },

  logout(state) {
    state.status = "";
    state.token = "";
  }
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
};

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("login_request");
      axios({
        url: "http://127.0.0.1:8000/api/login",
        data: user,
        method: "POST"
      }).then(response => {
        const token = response.data.token;
        const user = response.data.user;
        console.log(token)
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("login_success", { token, user });
        resolve(response);
      })
      .catch(error => {
        commit('login_error')
        localStorage.removeItem('token')
        reject(error)
      })
    })
  },

  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("login_request");
      axios({
        url: "http://127.0.0.1:8000/api/register",
        data: user,
        method: "POST"
      }).then(response => {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("login_success", token, user);
        resolve(response);
      })
      .catch(error => {
        commit('login_error')
        localStorage.removeItem('token')
        reject(error)
      })
    })
  },

  logout({commit}){
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      console.log('Log out success')
      resolve()
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
