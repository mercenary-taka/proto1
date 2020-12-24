<template>
  <div>
    <v-card :max-width="ocBean.width" :max-height="ocBean.heght">
      <v-tabs v-model="tab" show-arrows height="30" @change="tabChange($event)">
        <v-tabs-slider></v-tabs-slider>
        <v-tab v-for="item in this.tabPageArray" :key="item.tabPage">
          {{ item.name }}
        </v-tab>
      </v-tabs>
      <keep-alive>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in this.tabPageArray"
            :key="item.tabPage"
            eager
          >
            <slot :name="item.tabPage" />
          </v-tab-item>
        </v-tabs-items>
      </keep-alive>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    objectCd: { type: String, required: true },
    page: { type: Number, required: true },
    ocBean: { type: Object , required: true },
    tabPageArray: Array
  },
  data: () => ({
    tab: null,
  }),
  methods: {
    /**
     * ユーザ操作によって選択タブが変更されたとき
     * 引数：選択したタブページ（0から始まる）
     */
    tabChange: function (tabPageNo) {
      console.log("tabChange=" + tabPageNo);
    },
    setCurrentPage: function (e) {
      console.log(e);
      this.tab = e;
    },
  },
};
</script>