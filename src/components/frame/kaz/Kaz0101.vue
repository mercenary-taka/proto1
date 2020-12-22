<template>
<div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="auto">
    <UoZzz0003 objectCd="uo_5" page="0" :ocBean="uo5ocbean" key="uo_5"></UoZzz0003>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2">
    <UoZzz0001 objectCd="uo_1" page="0" :ocBean="uo1ocbean" key="uo_1"></UoZzz0001>
        </v-col>
    <v-col cols="2">
    <UoZzz0001 objectCd="uo_2" page="0" :ocBean="uo2ocbean" key="uo_2"></UoZzz0001>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2">
    <UoZzz0001 objectCd="uo_3" page="0" :ocBean="uo3ocbean" key="uo_3"></UoZzz0001>
        </v-col>
    <v-col cols="2">
    <UoZzz0001 objectCd="uo_4" page="0" :ocBean="uo4ocbean" key="uo_4"></UoZzz0001>
    </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
    <UoDw objectCd="dw_1" page="0" :ocBean="dw1ocbean" :dwClmBeanList="dwClmBeanList" key="dw_1"/>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>
<script>
import UoZzz0001 from '../../uo/UoZzz0001.vue'
import UoZzz0003 from '../../uo/UoZzz0003.vue'
import UoDw from '../../dw/UoDw.vue'
export default {
  components: { UoZzz0001, UoZzz0003, UoDw },
  data: () => ({
    uo1ocbean: {},
    uo2ocbean: {},
    uo3ocbean: {},
    uo4ocbean: {},
    uo5ocbean: {},
    dw1ocbean: {},
    dwClmBeanList: [],
  }),
  /**
   * 画面OPEN時の処理
   */
  mounted: function() {
    // サーバーからセットアップデータを取得し画面とUoに反映
    this.uo1ocbean = {objectCd: "uo_1", uoType: "A1", text: "役職", selectData: ["", "社長", "部長", "工場長"] };
    this.uo2ocbean = {objectCd: "uo_2", uoType: "B1", text: "入社年月日" };
    this.uo3ocbean = {objectCd: "uo_3", uoType: "C1", text: "氏名" };
    this.uo4ocbean = {objectCd: "uo_4", uoType: "D1", text: "社員番号" };
    this.uo5ocbean = {objectCd: "uo_5", text: "テスト会社" };
    this.dw1ocbean = {objectCd: "dw_1", width: "800", height: "450" };
    this.dwClmBeanList = [{ headerName: "社員番号", field: "empCd", sortable: true },
      { headerName: "氏名", field: "editName" },
      { headerName: "入社年月日", field: "enterDay" },
      { headerName: "役職", field: "post", editable: true}];
  },

  methods: {
    search: function() {

    },
    clear: function() {
      
    },
  },
}
</script>