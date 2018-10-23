import axios from "axios";

const state = {
  accounts: []
};

const mutations = {
  SET_ACCOUNTS(state, accounts) {
    state.accounts = accounts;
  }
};

const actions = {
  loadAccounts({ commit }) {
    axios
      .get("http://127.0.0.1:8000/api/accounts", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(response => {
        commit("SET_ACCOUNTS", response.data);
        console.log(response.data)
      });
  }
};

const getters = {
  getAccounts: state => {
    return state.accounts;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
