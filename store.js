// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 속성추가
  state : {
      allusers : [
        {name : '일길동', tel : '1111-1111', address : '서울 동대문구'},
        {name : '이길동', tel : '2222-2222', address : '경기도 성남시'},
        {name : '삼길동', tel : '3333-3333', address : '서울 성북구'},
        {name : '사길동', tel : '4444-4444', address : '서울 성동구'},
        {name : '오길동', tel : '5555-5555', address : '제주도'},
        {name : '육길동', tel : '6666-6666', address : '울릉도'},
      ],
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