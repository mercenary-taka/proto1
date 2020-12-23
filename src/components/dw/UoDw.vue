<template>
  <ag-grid-vue
    :style="{ width: ocBean.width + 'px', height: ocBean.height + 'px' }"
    class="ag-theme-balham"
    :columnDefs="dwClmBeanList"
    v-model="dataSet"
    :gridOptions="gridOptions"
    @data-model-changed="dataModelChanged"
  >
  </ag-grid-vue>
</template>
<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridVue } from "ag-grid-vue";

export default {
  components: {
    AgGridVue,
  },
  props: {
    objectCd: String,
    page: String,
    ocBean: { type: Object },
    dwClmBeanList: null,
  },
  data: () => ({
    dataSet: [],
          gridOptions: {
        // 列の定義
        //columnDefs:colDefs,

        // １行選択モード
        rowSelection: 'single', 

        // １行の高さ(タグ属性でも指定できるが、今回はオプションにした)
        rowHeight : 28, 

        // ページング機能を有効にするかの設定。タグ属性では指定できない模様
        pagination: true, 
        paginationAutoPageSize : true,

        // EVENTS - add event callback handlers
        // 行が選択されたイベント
        onRowSelected(params) { 
          params.api.redrawRows(); // 選択されたとき行の色を変える
        },
        // 行のスタイルを返すコールバック
        /*getRowStyle(params) {
          // 選択行のスタイル
          if (params.node.selected) {
            return { background: 'white' };
          } else { // 通常行のスタイル
            return { background: '#f1e8e8' };
          }
        },*/
        // グリッドの準備完了イベント
        onGridReady(params) {
          this.gridApi = params.api;
          this.columnApi = params.columnApi;

          // カラム幅を全体幅に合わせる.
          // これを呼ばないとcolumnDefが反映されません。
          //this.gridApi.sizeColumnsToFit(); 

        },
      },
  }),
  methods: {
      /**
       * データが変更されたときに呼ばれる
       * 引数：全データ
       * ※どのデータが変更されたかはこのメソッドでは判別できない。
       */
    dataModelChanged(rowData) {
        console.log("dataModelChanged");
        console.log(rowData);
    },
    setDataSet(dataSet) {
      this.dataSet = dataSet;
    }
  },
};
</script>