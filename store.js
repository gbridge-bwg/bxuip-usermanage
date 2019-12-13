// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
      allusers : [
        {name : 'first', tel : '1111-1111', address : '서울 동대문구'},
        {name : 'second', tel : '2222-2222', address : '경기도 성남시'},
        {name : 'third', tel : '3333-3333', address : '서울 성북구',},
        {name : 'fourth', tel : '4444-4444', address : '서울 성동구'},
        {name : 'fifth', tel : '5555-5555', address : '제주도' ,},
        {name : 'sixth', tel : '6666-6666', address : '울릉도' ,},
      ],
      uName : '',
      uTel : '',
      uAddress : '',
      beforeChangeUsers : [{name : '', tel : '', address : ''}]
  }
});




