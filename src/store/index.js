import Vue from "vue";
import Vuex from "vuex";
import login from "../store/auth/login";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});
