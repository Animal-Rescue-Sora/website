import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * 変数を定義する場所
   */
  state: {
    theGlobalMenu: false, // 初期値（Initial Value）は false とする
    theGlobalModal: null, // 初期値（Initial Value）は null とする
  },
  /**
   * 指定した変数の値を返却するための処理群
   */
  getters: {
    theGlobalMenu: function(state) {
      return state.theGlobalMenu;
    },
    theGlobalModal: function(state) {
      return state.theGlobalModal;
    },
  },
  /**
   * 指定した変数の値を変更する直前に行う処理群。"非同期的に"値を変更する
   */
  actions: {
    theGlobalMenu({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      if (newVal === false) {
        commit('theGlobalMenu', true);
      } else {
        commit('theGlobalMenu', false);
      }
    },
    theGlobalModal({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      commit('theGlobalModal', newVal);
    },
  },
  /**
   * 指定した変数の値を変更する処理群。"同期的に"値を変更する
   */
  mutations: {
    theGlobalMenu(state, payload) {
      state.theGlobalMenu = payload;
    },
    theGlobalModal(state, payload) {
      state.theGlobalModal = payload;
    },
  },
});
