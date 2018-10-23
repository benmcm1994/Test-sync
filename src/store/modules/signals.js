import axios from "axios";

const state = {
  signals: []
};

const mutations = {
  SET_SIGNALS(state, signals) {
    state.signals = signals;
  }
};

const actions = {
  loadSignals({ commit }) {
    axios
      .get("http://127.0.0.1:8000/api/signals", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(response => {
        commit("SET_SIGNALS", response.data);
      });
  }
};

const getters = {
  getSignals: state => {
    return state.signals;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
