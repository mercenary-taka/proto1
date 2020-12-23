import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // MainFrameに表示している画面
    mainFrameTabs: [],
    // メニュー表示制御 TODO 検証用
    menuBean:[],
    // メニューファンクション TODO 検証用
    menuFunctions: [],
  },
  getters: {
    getMainFrameTabs(state) {
      return state.mainFrameTabs
    },
    getMenuFunctions(state) {
      return state.menuFunctions

    },
  },
  mutations: {

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
    setMenuFunctions(state, payload) {
      state.menuFunctions.push(payload);
    }
  },
  actions: {},
  modules: {}
});
