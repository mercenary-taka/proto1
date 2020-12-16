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
import FusionToolBar from './components/FusionToolBar.vue';

export default {
  name: "App",
  components: {
    TreeMenuFrame,
    MainFrame,
    FusionToolBar
  },
  data: () => ({
    //
  })
};
</script>
