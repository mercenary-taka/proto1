<template>
  <v-card>
    <v-tabs
      v-model="tab"
      height="40"
      show-arrows
      @change="frameTabChange($event)"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="item in this.$store.state.mainFrameTabs" :key="item.pgmCd">
        {{ item.pgmCd }} {{ item.name }}
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              right
              @click="closeMainFramePage(item)"
              v-bind="attrs"
              v-on="on"
            >
              mdi-close
            </v-icon>
          </template>
          <span>閉じる</span>
        </v-tooltip>
      </v-tab>
    </v-tabs>
    <keep-alive>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in this.$store.state.mainFrameTabs"
          :key="item.pgmCd"
          eager
        >
<!--          画面名は{{ item.name }}です。winCdは{{ item.winCd }}です。pgmCdは{{
            item.pgmCd
          }}です。<br />-->
          <router-view :name="item.winCd" ></router-view>
        </v-tab-item>
      </v-tabs-items>
    </keep-alive>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    tab: null,
  }),
  mounted: function () {
    let that = this;
    this.$root.$on("selectMainFramePage", (arg) => {
      that.selectMainFramePage(arg);
    });
  },
  methods: {

    /**
     * ユーザ操作によって選択タブが変更されたとき
     * 引数：選択したタブページ（0から始まる）
     */
    frameTabChange: function (tabPageNo) {
      console.log("tabChange=" + tabPageNo);
      // TODO ここにメニュー変更処理を追加

    },
    selectMainFramePage: function (i) {
      console.log("selectmainFramePage");
      this.tab = i;
    },
    /**
     * 画面を閉じるときの処理
     * 引数：画面情報(object)
     */
    closeMainFramePage: function (attrs) {
      console.log("closeMainFramePage");
      let currentTab = this.tab;
      console.log(currentTab);
      // 閉じるタブのタブ番号を調べる
      var frameArray = this.$store.getters.getMainFrameTabs;
      var tabLength = frameArray.length;
      var selectNo = -1;
      for (let index = 0; index < tabLength; index++) {
        const element = frameArray[index];
        if (attrs.pgmCd === element.pgmCd) {
          selectNo = index;
          break;
        }
      }
      // タブデータを削除してタブを閉じる
      this.$store.commit("removeMainFrameTabs", { pgmCd: attrs.pgmCd });
      // 閉じた後、タブを選択しなおす
      if (tabLength < 0) {
        // 何もしない
      } else if (selectNo < this.tab) {
        this.tab--;
      } else if (selectNo === this.tab) {
        if (this.tab === 0) {
          // 何もしない
        } else {
          this.tab--;
        }
      }
    },
  },
};
</script>
<style>
</style>