const state = {
    isLoggedIn: !!localStorage.getItem('token')
  }
  
  const mutations = {
    loginUser(state){
        state.isLoggedIn = true;
      },
      logoutUser(state){
        state.isLoggedIn = false;
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
  