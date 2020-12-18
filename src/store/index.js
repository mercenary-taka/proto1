import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // メニュー表示制御
    showMenu: true,
    // MainFrameに表示している画面
    mainFrameTabs: []
  },
  getters: {
    isShowMenu(state) {
      return state.showMenu
    },
    getMainFrameTabs(state) {
      return state.mainFrameTabs
    },
  },
  mutations: {
    showMenu(state) {
      state.showMenu = !state.showMenu
    },
    addMainFrameTabs(state, payload) {
      state.mainFrameTabs.push(payload)
    },
    removeMainFrameTabs(state, payload) {
      // 画面を削除する
      for (let index = 0; index < state.mainFrameTabs.length; index++) {
        const element = state.mainFrameTabs[index]
        if (payload.pgmCd === element.pgmCd) {
          state.mainFrameTabs.splice(index, 1)
          break;
        }
      }
    },
  },
  actions: {},
  modules: {}
});
