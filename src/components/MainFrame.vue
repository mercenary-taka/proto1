<template>
<v-card>
    <v-tabs
      v-model="tab"
      height="30"
      show-arrows
    >
    <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="n in length"
        :key="n"
      >
        〇〇〇〇〇〇画面 {{ n }}
      </v-tab>
    </v-tabs>
    <keep-alive>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="n in length"
        :key="n"
        > 
        {{ n }}
      </v-tab-item>
    </v-tabs-items>
    </keep-alive>
    <v-card-text class="text-center">
      <v-btn
        :disabled="!length"
        text
        @click="length--"
      >
        Remove Tab
      </v-btn>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <v-btn
        text
        @click="length++"
      >
        Add Tab
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      length: 0,
      tab: null,
    }),

    watch: {
      length (val) {
        this.tab = val - 1
      },
    },
  }
</script>
<style>

</style>