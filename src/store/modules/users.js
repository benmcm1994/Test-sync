import axios from "axios";

const state = {
  users: []
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  }
};

const actions = {
  loadUsers({ commit }) {
    axios
      .get("http://127.0.0.1:8000/api/users", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(response => {
        commit("SET_USERS", response.data);
      });
  }
};

const getters = {
  getUsers: state => {
    return state.users;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
