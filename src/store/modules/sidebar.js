const state = {
    drawer: true
  }
  
  const mutations = {
    toggleDrawer: state => {
        state.drawer = !state.drawer
      }
  }
  
  const getters = {
  
  }
  
  const actions = {
      
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  