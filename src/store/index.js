import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // MainFrameに表示している画面
    mainFrameTabs: [],
    // メニュー表示制御 TODO 検証用
    currentMenuBean: "1111111111111",
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
    isToolBarBtnVisible(state) {
      return flagNo => {
         return (state.currentMenuBean && state.currentMenuBean.substr(flagNo, 1) === "1") ? true : false;
      }
    },
    isPrintToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(0);
    },
    isSearchToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(1);
    },
    isRecalToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(2);
    },
    isCopyToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(3);
    },
    isCutToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(4);
    },
    isPasteToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(5);
    },
    isClearToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(6);
    },
    isCancelToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(7);
    },
    isInsertToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(8);
    },
    isDeleteToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(9);
    },
    isUpdateToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(10);
    },
    isInputFileToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(11);
    },
    isOutputFileToolBtnVisible(state, getters) {
      return getters.isToolBarBtnVisible(12);
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
    },
    setCurrentMenuBean(state, payload) {
      state.currentMenuBean = payload;
    }
  },
  actions: {},
  modules: {}
});
