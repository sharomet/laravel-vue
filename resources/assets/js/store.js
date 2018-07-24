import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageTitle: 'Test',
    preLoader: true,
    isLoggedIn: !!localStorage.getItem('token')
  },
  getters: {
  },
  mutations: {
    loginUser(state) {
      state.isLoggedIn = true
    },
    logoutUser(state) {
      state.isLoggedIn = false
    },
  },
  actions: {
  }
})