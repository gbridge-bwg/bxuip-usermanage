<template>
  <div id="table-wrap">
      <table>
        <thead>
        <tr>
            <th>순서</th>
            <th>이름</th>  
            <th>전화번호</th>
            <th>주소</th>
            <th>삭제</th>
            <th>수정</th> 
        </tr>
    </thead>
    <tbody>
        <tr v-for="(alluser, index) in allusers" :key="alluser.index">
            <td>{{index+1}}</td>
            <td>{{alluser.name}}</td>
            <td>{{alluser.tel}}</td>
            <td>{{alluser.address}}</td>
            <td><button id="gb-button" v-on:click="removeUser(alluser, index)">삭제</button></td>
            <td><router-link id="gb-button" to="/change" v-on:click.native="goChange(alluser, index)">수정</router-link></td>

    <modal v-if="showModal" v-on:close="showModal=false">
      <h3 id="modal-header" slot="header">삭제알림</h3>
      <h4 id="modal-body" slot="body">삭제가 완료 됐습니다.</h4>
      <div id="wrap">
      <h4 slot="footer" v-on:click="showModal=false"></h4>
      </div>
    </modal>
        </tr>
    </tbody>
    </table>
    <br><br>
    <router-link id="gb-button" to="/change" >수정page로 이동</router-link>
    <br><br>
    <router-link id="gb-button" to="/regist" >가입page로 이동</router-link>
  </div>

</template>

<script>
import {eventBus} from '../main'
import Modal from './common/Modal.vue'

export default {

  data() {
    return {
      showModal : false,
      allusers : this.$store.state.allusers,
      showChange : false  
    }
  },
  methods : {
    removeUser(alluser, index) {
      console.log("삭제대상 :"+alluser.name );
      
      this.showModal = !this.showModal;
      this.allusers.splice(index,1)
      
    },
    goChange(alluser, index) {

      this.$store.state.beforeChangeUsers[0].name = alluser.name
      this.$store.state.beforeChangeUsers[0].tel = alluser.tel
      this.$store.state.beforeChangeUsers[0].address = alluser.address



      console.log("전송 및 저장될 데이터 : ");
      console.log(this.$store.state.beforeChangeUsers[0].name);
      console.log(this.$store.state.beforeChangeUsers[0].tel);
      console.log(this.$store.state.beforeChangeUsers[0].address);

    }
  },  
  components : {
    Modal : Modal,
  }
}
</script>


<style scoped>
#table-wrap {
  /* background-color:skyblue; */
}

/* start grid css */

table {
    
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: auto;

    /* 이하는 bxuip 에서 복붙 */
    /* 상위 컨테이너에서 align을 center후, margin에 auto 부여시 중앙정렬 */
    /* margin에 auto만 부여해도 중앙정렬이 되긴 함 */
    margin: auto;  

    table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    text-align: center !important;
    border-width: 0;
    border-left: 1px solid #e6e6e6 !important;
    border-style: none;
    padding: 1000px;
    font-size: 12px;
    font-family: 'notokr';
    font-weight: normal;
    display: table;
    border-color: grey;
    line-height: normal;
    color: #454545;
    
/* =======================끝 */
  }

  thead{
      /* bwg 에서 가져옴 */
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
      table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    text-align: center !important;
    border-width: 0;
    border-style: none;
    font-family: 'notokr';
    font-weight: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
      /* end */
  }

  th {
      /* from bwg */
      padding: 0px;
      height: 40px !important;
      letter-spacing: -.5px !important;
      font-weight: 500 !important;
      font-size: 12px !important;
      width: 103px;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      border-bottom: none !important;
      border-left: 1px solid #e6e6e6 !important;
      border-top: 1px solid #e6e6e6 !important;
      background: #fbfbfb !important;
      color: #1299c1 !important;
      border: 1px solid #c5c5c5;
      border-right: 1px solid #e6e6e6 !important;
      margin: 0;
      display: table-cell;
    vertical-align: inherit;
    table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    line-height: normal;
      /* end */
  }

  tr {
      /* from bwg */
      outline-style: none;
      background: #fff;
      color: #333;
      display: table-row;
    vertical-align: inherit;
    table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    text-align: center !important;
    font-family: 'notokr';
    font-weight: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: normal;

      /* end */
  }

td {
    /* from bwg */
    border-color: initial;
    height: 40px !important;
    font-size: 12px !important;
    width: auto;
    text-align: center;
    text-overflow: ellipsis;
    border-left-width: 0;
    border-bottom: 1px solid #eeeeee !important;
    border-right: 1px solid #e6e6e6 !important;

    color: #666666 !important;
    border-left-style: none !important;
    font-weight: normal;
    padding: 0 2px 0 2px;
    border-top: 0 none;
    overflow: hidden;
    white-space: pre;
    vertical-align: middle;
    margin: 0;
    display: table-cell;
    border-spacing: 0 !important;
    border-collapse: collapse !important;

    /* end */
}
/* end grid css */

    #gb-button {
      text-decoration: none;
        box-sizing: border-box;
        width: auto;
        height: 25px;
        line-height: 25px;
        cursor: pointer;
        display: inline-block;
        border: 0;
        padding: 0 10px;
        border-radius: 3px;
        font-size: 11px;
        text-transform: capitalize;
        color: white;
        background: #1297bf;
    }

</style>>
 
