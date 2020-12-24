<template>
  <div>
    <v-layout justify-start align-center class="ps-2">
      <v-row>
        <v-col cols="3">
          <UoZzz0003
            objectCd="uo_5"
            page="0"
            :ocBean="uo5ocbean"
            key="uo_5"
            ref="uo_5"
          ></UoZzz0003>
          <UoZzz0001
            objectCd="uo_1"
            page="0"
            :ocBean="uo1ocbean"
            key="uo_1"
            ref="uo_1"
          ></UoZzz0001>
        </v-col>
        <v-spacer />
        <v-col cols="7">
          <UoTabBase
            :objectCd="'tab_1'"
            :page="0"
            :ocBean="tab1ocbean"
            :tabPageArray="tabPageArray"
            key="tab_1"
            ref="tab_1"
          >
            <template v-slot:1>
              <v-container fluid>
              <UoDw
                objectCd="dw_1"
                page="1"
                :ocBean="dw1ocbean"
                :dwClmBeanList="dw1ClmBeanList"
                key="dw_1"
                ref="dw_1"
              />
              </v-container>
            </template>
            <template v-slot:2>
              <v-container fluid>
              <UoZzz0001
                objectCd="uo_2"
                page="2"
                :ocBean="uo1ocbean"
                key="uo_2"
                ref="uo_2"
              ></UoZzz0001>
              <UoDw
                objectCd="dw_2"
                page="2"
                :ocBean="dw2ocbean"
                :dwClmBeanList="dw2ClmBeanList"
                key="dw_2"
                ref="dw_2"
              />
              </v-container>
            </template>
          </UoTabBase>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>
<script>
import UoZzz0001 from "../../uo/UoZzz0001.vue";
import UoZzz0003 from "../../uo/UoZzz0003.vue";
import UoDw from "../../dw/UoDw.vue";
import UoTabBase from "../../uo/UoTabBase.vue";
export default {
  components: { UoZzz0001, UoZzz0003, UoTabBase, UoDw },
  data: () => ({
    uo1ocbean: {},
    uo5ocbean: {},
    dw1ocbean: {},
    dw2ocbean: {},
    tab1ocbean: {},
    dw1ClmBeanList: [],
    dw2ClmBeanList: [],
    tabPageArray: [],
  }),
  mounted: function () {
    // サーバーからセットアップデータを取得し画面とUoに反映
    this.uo1ocbean = { objectCd: "uo_1", uoType: "D1", text: "社員番号" };
    this.uo5ocbean = { objectCd: "uo_5", text: "テスト会社" };
    this.dw1ocbean = { objectCd: "dw_1", width: "450", height: "400" };
    this.dw2ocbean = { objectCd: "dw_2", width: "400", height: "400" };
    this.tab1ocbean = { objectCd: "tab_1", width: "500", height: "600" };
    this.dw1ClmBeanList = [
      { headerName: "発令年月日", field: "annouceday", sortable: true },
      { headerName: "所属", field: "assignNm" },
      { headerName: "役職", field: "post" },
    ];
    this.dw2ClmBeanList = [
      { headerName: "社員番号", field: "empCd", sortable: true },
      { headerName: "氏名", field: "editName" },
      { headerName: "入社年月日", field: "enterDay" },
      { headerName: "役職", field: "post", editable: true },
    ];

    this.tabPageArray = [
      { tabPage: "1", name: "所属歴"},
      { tabPage: "2", name: "個人情報"}
    ]

    // functionの登録
    let that = this;
    this.$store.commit("setMenuFunctions", function() { that.search() });
    this.$store.commit("setMenuFunctions", function() { that.clear() });
  },
   
  methods: {
    search: function () {
      console.log("Kaz0102.search");
      let newDataSet1 = [
      { assignNm: "開発部　開発課", annouceday: "2003/04/01", post: "課長" },
      { assignNm: "人事部", annouceday: "2003/01/01", post: "" },
      ]

      let newDataSet2 = [
      { empCd: "000001", editName: "Celica", enterDay: "2003/04/01", post: "社長" },
      { empCd: "000003", editName: "Mondeo", enterDay: "1999/01/01", post: "" },
      { empCd: "000002", editName: "Boxter", enterDay: "2020/04/01", post: "部長" },
      { empCd: "000004", editName: "samus", enterDay: "2010/04/01", post: "" },
    ];

    this.$refs.dw_1.dataSet = newDataSet1;
    this.$refs.dw_2.dataSet = newDataSet2;

    },
    clear: function () {
      console.log("Kaz0102.clear");
      this.$refs.dw_1.dataSet = [];
      this.$refs.dw_2.dataSet = [];
      this.$refs.uo_1.clear();
      this.$refs.uo_2.clear();
      this.$refs.tab_1.setCurrentPage(0);
    },
  },
};
</script>