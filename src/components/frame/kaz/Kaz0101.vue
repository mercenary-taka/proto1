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
        </v-col>
      </v-row>
    </v-layout>
    <v-layout justify-start align-center class="ps-2">
      <v-row no-gutters>
        <v-col cols="3">
          <UoZzz0001
            objectCd="uo_1"
            page="0"
            :ocBean="uo1ocbean"
            key="uo_1"
            ref="uo_1"
          ></UoZzz0001>
        </v-col>
        <v-col cols="3">
          <UoZzz0001
            objectCd="uo_2"
            page="0"
            :ocBean="uo2ocbean"
            key="uo_2"
            ref="uo_2"
          ></UoZzz0001>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout justify-start align-center class="ps-2">
      <v-row no-gutters>
        <v-col cols="3">
          <UoZzz0001
            objectCd="uo_3"
            page="0"
            :ocBean="uo3ocbean"
            key="uo_3"
            ref="uo_3"
          ></UoZzz0001>
        </v-col>
        <v-col cols="3">
          <UoZzz0001
            objectCd="uo_4"
            page="0"
            :ocBean="uo4ocbean"
            key="uo_4"
            ref="uo_4"
          ></UoZzz0001>
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
import UoZzz0001 from "../../uo/UoZzz0001.vue";
import UoZzz0003 from "../../uo/UoZzz0003.vue";
import UoDw from "../../dw/UoDw.vue";
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
  mounted: function () {
    // サーバーからセットアップデータを取得し画面とUoに反映
    this.uo1ocbean = {
      objectCd: "uo_1",
      uoType: "A1",
      text: "役職",
      selectData: ["", "社長", "部長", "工場長"],
    };
    this.uo2ocbean = { objectCd: "uo_2", uoType: "B1", text: "入社年月日" };
    this.uo3ocbean = { objectCd: "uo_3", uoType: "C1", text: "氏名" };
    this.uo4ocbean = { objectCd: "uo_4", uoType: "D1", text: "社員番号" };
    this.uo5ocbean = { objectCd: "uo_5", text: "テスト会社" };
    this.dw1ocbean = { objectCd: "dw_1", width: "800", height: "450" };
    this.dwClmBeanList = [
      { headerName: "社員番号", field: "empCd", sortable: true },
      { headerName: "氏名", field: "editName" },
      { headerName: "入社年月日", field: "enterDay" },
      { headerName: "役職", field: "post", editable: true },
    ];

    // functionの登録
    let that = this;
    this.$store.commit("setMenuFunctions", function() { that.search() });
    this.$store.commit("setMenuFunctions", function() { that.clear() });
  },
  
  methods: {
    search: function () {
      console.log("Kaz0101.search");

      let newDataSet = [
      { empCd: "000001", editName: "Celica", enterDay: "2003/04/01", post: "社長" },
      { empCd: "000003", editName: "Mondeo", enterDay: "1999/01/01", post: "" },
      { empCd: "000002", editName: "Boxter", enterDay: "2020/04/01", post: "部長" },
      { empCd: "000004", editName: "samus", enterDay: "2010/04/01", post: "" },
    ];

    this.$refs.dw_1.dataSet = newDataSet;


    },
    clear: function () {
      console.log("Kaz0101.clear");
      this.$refs.dw_1.dataSet = [];
      this.$refs.uo_1.clear();
      this.$refs.uo_2.clear();
      this.$refs.uo_3.clear();
      this.$refs.uo_4.clear();
    },
  },
};
</script>