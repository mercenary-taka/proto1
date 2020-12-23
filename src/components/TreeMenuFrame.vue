<template>
  <v-navigation-drawer
    app
    clipped
    :value="showMenu"
    v-on:transitionend="menuVisibility($event)"
    width="350"
  >
    <v-sheet class="pa-2">
      <v-text-field
        v-model="search"
        label="名前で検索"
        flat
        solo-inverted
        hide-details
        clearable
        prepend-inner-icon="mdi-magnify"
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
    </v-sheet>
    <v-treeview
      v-model="tree"
      :items="items"
      :search="search"
      :filter="filter"
      :active.sync="active"
      item-key="name"
      v-on:update:active="selectWindow"
      open-on-click
      dense
      hoverable
      activatable
      return-object
    >
    
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
      
    </v-treeview>
  </v-navigation-drawer>
</template>
<script>
export default {

  mounted: function () {
    let that = this;
    this.$root.$on("showMenuFrame", () => {
      that.showMenuFrame();
    });
  },
  methods: {
    /**
     * ツリーメニューで画面を選択したときの処理
     *
     **/
    selectWindow: function (e) {

      if (!e || e.length === 0) {
        return;
      }
      // 既に開いている画面か確認
      var frameArray = this.$store.getters.getMainFrameTabs;
      var selectPgmCd = e[0].pgmCd;
      var selectNo = -1;
      for (let index = 0; index < frameArray.length; index++) {
        const element = frameArray[index];
        if (selectPgmCd === element.pgmCd) {
          selectNo = index;
          break;
        }
      }

      // まだ開いていない画面の場合
      if (selectNo === -1) {
        // TODO サーバーから画面情報取得

        // 開いていない画面の場合はvuexストアに画面情報を追加
        this.$store.commit("addMainFrameTabs", e[0]);
        // TODO 追加する情報いろいろ

        selectNo = frameArray.length - 1;
      }

      // ツリーメニューを閉じる
      this.showMenuFrame();
      // 開いた画面を選択表示する
      this.$root.$emit("selectMainFramePage", selectNo);
      // ツリーの選択状態を解除
      this.active.pop();

    },

    showMenuFrame() {
      this.showMenu = !this.showMenu;
    },

    menuVisibility: function (el) {
      if (el.propertyName === "visibility") {
        var eventClass = el.target.className;
        if (
          eventClass &&
          this.showMenu === true &&
          eventClass.indexOf("v-navigation-drawer--close") > -1
        ) {
          this.showMenuFrame();
        } else if (
          eventClass &&
          this.showMenu === false &&
          eventClass.indexOf("v-navigation-drawer--open") > -1
        ) {
          this.showMenuFrame();
        }
      }
    },
  },
  data: () => ({
    showMenu: false,
    search: null,
    filter: null,
    active: [],
    files: {
      png: "mdi-file-image",
    },
    tree: [],
    items: [
      {
        name: "テスト会社",
        children: [
          {
            name: "個人情報",
            children: [
              {
                name: "個人情報",
                children: [
                  {
                    name: "個人情報参照",
                    children: [
                      {
                        name: "氏名検索",
                        file: "png",
                        winCd: "KAZ0101",
                        pgmCd: "KAZ0101",
                      },
                      {
                        name: "個別検索",
                        file: "png",
                        winCd: "KAZ0102",
                        pgmCd: "KAZ0102",
                      },
                    ],
                  },
                  {
                    name: "個人情報更新",
                    children: [
                      {
                        name: "社員属性更新",
                        file: "png",
                        winCd: "KAZ0501",
                        pgmCd: "KAZ0511",
                      },
                      {
                        name: "本人属性更新",
                        file: "png",
                        winCd: "KAZ0601",
                        pgmCd: "KAZ0611",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "賃金共通",
            children: [
              {
                name: "月例賃金管理",
                children: [
                  {
                    name: "賃金管理",
                    children: [
                      {
                        name: "賃金基本更新",
                        file: "png",
                        winCd: "CDA0101",
                        pgmCd: "CDA0111",
                      },
                      {
                        name: "賃金台帳",
                        file: "png",
                        winCd: "CDS0101",
                        pgmCd: "CDS0101",
                      },
                    ],
                  },
                  {
                    name: "マスター管理",
                    children: [
                      {
                        name: "月俸",
                        file: "png",
                        winCd: "ZZZ0103",
                        pgmCd: "CDAM001",
                      },
                      {
                        name: "役職手当",
                        file: "png",
                        winCd: "ZZZ0103",
                        pgmCd: "CDAM002",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
};
</script>
