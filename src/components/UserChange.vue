<template>
  <div><h3>수정전data</h3>
    <div id="table-wrap">
    <table>
        <thead>
        <tr>
            <th>이름</th>  
            <th>전화번호</th>
            <th>주소</th>

        </tr>
    </thead>
    <tbody>
      <tr v-for="(beforeChangeUser) in beforeChangeUsers" :key="beforeChangeUser.index">
        <td>{{beforeChangeUser.name}}</td>
        <td>{{beforeChangeUser.tel}}</td>
        <td>{{beforeChangeUser.address}}</td>
      </tr>
    </tbody> 
    </table>
    </div>
    <br><br><br>
    <h3>수정할 data입력하기</h3>
    <div id="table-wrap">
    <table>
        <thead>
        <tr>
            <th>이름</th>  
            <th>전화번호</th>
            <th>주소</th>
            <th>수정완료</th>
        </tr>
    </thead>
    <tbody>
        <td>
            <div id="input2-wrap-default">
            <input id="input2-text" v-model="uname" type="text" placeholder="write name" /></div>
        </td>
        <td>
            <div id="input2-wrap-default">
            <input id="input2-text" v-model="utel" type="text" placeholder="write tel" /></div>
        </td>
        <td>
            <div id="input2-wrap-default">
            <input id="input2-text" v-model="uaddress" type="text" placeholder="write address" /></div>
        </td>
        <td>
            <router-link to="/" id="gb-button" v-on:click.native="changeData">수정완료</router-link>
        </td>
    </tbody> 
    </table>
    </div>
    <br><br>
    <router-link id="gb-button" to="/regist" >가입화면으로 이동</router-link>
    <br><br>
    <router-link id="gb-button" to="/" >메인화면으로 이동</router-link>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
  data() {
    return {
      beforeChangeUsers : this.$store.state.beforeChangeUsers,
      uname : '',
      utel : '',
      uaddress : '',

    }
  },
  methods : {
    changeData() {
      let targetName = this.beforeChangeUsers[0].name;

      this.beforeChangeUsers[0].name = this.uname;
      this.beforeChangeUsers[0].tel = this.utel;
      this.beforeChangeUsers[0].address = this.uaddress;
      
      // allusers 라는 객체배열을 allusers라는 객체배열의 길이만큼 탐색
      let tmp = this.$store.state.allusers;
      
      for(let i =0; i < tmp.length; i++) {
        if(tmp[i].name == targetName) {
          tmp[i].name = this.beforeChangeUsers[0].name;
          tmp[i].tel = this.beforeChangeUsers[0].tel;
          tmp[i].address = this.beforeChangeUsers[0].address;
        }
      }
      this.beforeChangeUsers[0].name = '수정대상없음';
      this.beforeChangeUsers[0].tel = '수정대상없음';
      this.beforeChangeUsers[0].address = '수정대상없음';
    }
  }
}
</script>

<style scoped>
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

#input2-wrap-default {
    vertical-align: bottom;
    position: relative;
    display: inline-block;
    padding: 0 0 0 0;
    line-height: 25px;
    height: 25px;
    background: white;
    /* box-shadow: 0 0 0 1px #e6e6e6 inset; */
    font-family: 'notokr';
    font-weight: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    box-sizing: border-box;
    color: #000;
    
}

#input2-label {
    margin: 0;
    display: inline-block;
    float: left;
    background-color: transparent;
    height: 25px;
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 90px;
    border-right: 1px solid #e6e6e6;
    line-height: 25px;
    text-indent: 20px;
    font-weight: 400;
    background-size: auto 100%;
    text-align: left;
    color: #1297bf;
    box-sizing: border-box;
    cursor: default;
}

#input2-text {
    background-repeat: no-repeat;
    background-position-x: right;
    box-shadow: none;
    width: 200px !important;
    min-width: 50px;
    text-align: center;
    text-indent: 0;
    margin: 0;
    display: inline-block;
    float: left;
    background-color: transparent;
    height: 25px;
    font-size: 11px;
    outline: 0;
    line-height: 13px;
    border: 0;
    padding: 0 10px 0 5px;
    color: #666666;
    box-sizing: border-box;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
    -webkit-rtl-ordering: logical;
    cursor: text;
    font: 400 13.3333px Arial;
}
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
</style>>
