<template>
  <v-app>
    <FusionToolBar />
    <TreeMenuFrame />
    <v-main>
      <MainFrame />
    </v-main>
    <v-footer app dark>
      フッターです。
    </v-footer>
  </v-app>
</template>

<script>
import TreeMenuFrame from "./components/TreeMenuFrame";
import MainFrame from "./components/MainFrame";
import FusionToolBar from './components/FusionToolBar';

export default {
  name: "App",
  components: {
    TreeMenuFrame,
    MainFrame,
    FusionToolBar
  },
  data: () => ({
    //
  }),
  mounted: function () {
    this.$root.$emit("showMenuFrame");
  },
};
</script>
