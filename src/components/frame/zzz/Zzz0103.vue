<template>
  <div>
    <v-layout justify-start align-center class="ps-2">
      <v-row>
        <v-col cols="3">
          <UoZzz0003
            objectCd="uo_1"
            page="0"
            :ocBean="uo1ocbean"
            key="uo_1"
            ref="uo_1"
          ></UoZzz0003>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout justify-start align-center class="ps-2">
      <v-row no-gutters>
        <v-col>
          <UoDw
            objectCd="dw_1"
            page="0"
            :ocBean="dw1ocbean"
            :dwClmBeanList="dwClmBeanList"
            key="dw_1"
            ref="dw_1"
          />
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>
<script>
import UoZzz0003 from "../../uo/UoZzz0003.vue";
import UoDw from "../../dw/UoDw.vue";
export default {
  components: { UoZzz0003, UoDw },
  data: () => ({
    uo1ocbean: {},
    dw1ocbean: {},
    dwClmBeanList: [],
  }),
  /**
   * 画面OPEN時の処理
   */
  mounted: function () {
    // サーバーからセットアップデータを取得し画面とUoに反映
    this.uo1ocbean = {
      objectCd: "uo_1",
      text: "テスト会社",
    };
    this.dw1ocbean = { objectCd: "dw_1", width: "900", height: "400" };
    this.dwClmBeanList = [
      { headerName: "開始年月日", field: "fromYmd" },
      { headerName: "終了年月日", field: "toYmd" },
      { headerName: "役職", field: "post" },
      { headerName: "月俸", field: "saraly", editable: true },
    ];

    let newDataSet = [
      { fromYmd: "1900/01/01", toYmd: "9999/12/31", saraly: "600000", post: "社長" },
      { fromYmd: "1900/01/01", toYmd: "9999/12/31", saraly: "500000", post: "部長" },
      { fromYmd: "1900/01/01", toYmd: "9999/12/31", saraly: "550000", post: "工場長" },
      { fromYmd: "1900/01/01", toYmd: "9999/12/31", saraly: "420000", post: "課長" },
    ];

    this.$refs.dw_1.dataSet = newDataSet;

    // functionの登録
    //let that = this;
    //this.$store.commit("setMenuFunctions", function() { that.search() });
    //this.$store.commit("setMenuFunctions", function() { that.clear() });
  },
  
  methods: {
    search: function () {

      let newDataSet = [
      { empCd: "000001", editName: "Celica", enterDay: "2003/04/01", post: "社長" },
      { empCd: "000003", editName: "Mondeo", enterDay: "1999/01/01", post: "" },
      { empCd: "000002", editName: "Boxter", enterDay: "2020/04/01", post: "部長" },
      { empCd: "000004", editName: "samus", enterDay: "2010/04/01", post: "" },
    ];

    this.$refs.dw_1.dataSet = newDataSet;


    },
    clear: function () {
      this.$refs.dw_1.dataSet = [];
    },
  },
};
</script>