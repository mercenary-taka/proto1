<template>
  <v-app-bar app clipped-left dense>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        :src="require('../assets/fusionxpg.png')"
        width="200"
      />
    </div>
    <!-- メニュー -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="showMenu" v-bind="attrs" v-on="on">
          <v-icon>mdi-ballot-outline</v-icon>
        </v-btn>
      </template>
      <span>メニュー</span>
    </v-tooltip>
    <!-- 閉じる -->
    <!--<v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click.stop="showMenu" v-bind="attrs" v-on="on">
            <v-icon>mdi-close-outline</v-icon>
          </v-btn>
        </template>
        <span>閉じる</span>
      </v-tooltip>-->
    <!-- 画面印刷 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="screenPrint" v-bind="attrs" v-on="on">
          <v-icon>mdi-printer</v-icon>
        </v-btn>
      </template>
      <span>画面印刷</span>
    </v-tooltip>
    <v-divider inset vertical></v-divider>
    <!-- 帳票印刷 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="print" v-bind="attrs" v-on="on">
          <v-icon>mdi-file-chart-outline</v-icon>
        </v-btn>
      </template>
      <span>帳票印刷</span>
    </v-tooltip>
    <!-- 検索 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="search" v-bind="attrs" v-on="on">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <span>検索</span>
    </v-tooltip>
    <!-- 再計算 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="recal" v-bind="attrs" v-on="on">
          <v-icon>mdi-calculator</v-icon>
        </v-btn>
      </template>
      <span>再計算</span>
    </v-tooltip>
    <!-- コピー -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="copy" v-bind="attrs" v-on="on">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </template>
      <span>コピー</span>
    </v-tooltip>
    <!-- 切り取り -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="cut" v-bind="attrs" v-on="on">
          <v-icon>mdi-content-cut</v-icon>
        </v-btn>
      </template>
      <span>切り取り</span>
    </v-tooltip>
    <!-- 貼り付け -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="paste" v-bind="attrs" v-on="on">
          <v-icon>mdi-content-paste</v-icon>
        </v-btn>
      </template>
      <span>貼り付け</span>
    </v-tooltip>
    <!-- クリア -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="clear" v-bind="attrs" v-on="on">
          <v-icon>mdi-flare</v-icon>
        </v-btn>
      </template>
      <span>クリア</span>
    </v-tooltip>
    <!-- キャンセル -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="cancel" v-bind="attrs" v-on="on">
          <v-icon>mdi-undo</v-icon>
        </v-btn>
      </template>
      <span>キャンセル</span>
    </v-tooltip>
    <!-- 追加 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="insert" v-bind="attrs" v-on="on">
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </template>
      <span>追加</span>
    </v-tooltip>
    <!-- 削除 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="del" v-bind="attrs" v-on="on">
          <v-icon>mdi-minus-circle-outline</v-icon>
        </v-btn>
      </template>
      <span>削除</span>
    </v-tooltip>
    <!-- 更新 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="update" v-bind="attrs" v-on="on">
          <v-icon>mdi-database-arrow-up-outline</v-icon>
        </v-btn>
      </template>
      <span>更新</span>
    </v-tooltip>
    <!-- ファイル入力 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="inputFile" v-bind="attrs" v-on="on">
          <v-icon>mdi-clipboard-arrow-up-outline</v-icon>
        </v-btn>
      </template>
      <span>ファイル入力</span>
    </v-tooltip>
    <!-- ファイル出力 -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click.stop="outputFile" v-bind="attrs" v-on="on">
          <v-icon>mdi-clipboard-arrow-down-outline</v-icon>
        </v-btn>
      </template>
      <span>ファイル出力</span>
    </v-tooltip>
    <v-divider inset vertical></v-divider>
    <v-spacer></v-spacer>
    <!-- アカウントメニュー -->
    <AccountMenu />
  </v-app-bar>
</template>
<script>
import AccountMenu from './AccountMenu';
export default {
  components: {
    AccountMenu
  },
  methods: {
    /**
     * メニューボタン押下時の処理
     */
    showMenu() {
      this.$store.commit("showMenu");
    },
    screenPrint() {

    },
    print() {

    },
    search() {

    },
    recal() {

    },
    copy() {

    },
    cut() {

    },
    paste() {

    },
    clear() {

    },
    cancel() {

    },
    insert() {

    },
    del() {

    },
    update() {

    },
    inputFile() {

    },
    outputFile() {

    },
  },
};
</script>