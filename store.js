// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 속성추가
  state : {
      allusers : [
        {name : 'first', tel : '1111-1111', address : '서울 동대문구' ,INDEX : 0},
        {name : 'second', tel : '2222-2222', address : '경기도 성남시' ,INDEX : 1},
        {name : 'third', tel : '3333-3333', address : '서울 성북구', INDEX : 2},
        {name : 'fourth', tel : '4444-4444', address : '서울 성동구' ,INDEX : 3},
        {name : 'fifth', tel : '5555-5555', address : '제주도' ,INDEX : 4},
        {name : 'sixth', tel : '6666-6666', address : '울릉도' ,INDEX : 5},
      ],
      uName : '',
      uTel : '',
      uAddress : '',
      beforeChangeUsers : [{name : '', tel : '', address : '',INDEX : -1}]
  },
  mutations : {
      getUname() {
          return state.uName;
      },
      getUtel(state, payload) {
          state.uTel = payload;
      },
      getUaddress(state, payload) {
          state.uAddress = payload;
      }
  }
});