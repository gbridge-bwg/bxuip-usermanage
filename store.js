// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 속성추가
  state : {
      uName : '',
      uTel : '',
      uAddress : ''
  },
  mutations : {
      getUname(state, payload) {
          state.uName = payload;
      },
      getUtel(state, payload) {
          state.uTel = payload;
      },
      getUaddress(state, payload) {
          state.uAddress = payload;
      }
  }
});