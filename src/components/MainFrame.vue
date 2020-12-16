<template>
<v-card>
    <v-tabs
      v-model="tab"
      height="30"
      show-arrows
    >
      <v-tab
        v-for="n in length"
        :key="n"
        :href="'#tab-' + n"
      >
        〇〇〇〇〇〇画面 {{ n }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="n in length"
        :key="n"
        >
        <v-card>
        <v-card-text>
          tabpage {{ n }}
        </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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