import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // メニュー表示制御
    showMenu: true
  },
  getters: {
    isShowMenu(state) {
      return state.showMenu
    }
  },
  mutations: {
    showMenu(state) {
      state.showMenu = !state.showMenu
    }
  },
  actions: {},
  modules: {}
});
