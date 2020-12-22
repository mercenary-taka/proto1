<template>
  <div>
    <div v-if="ocBean.uoType === 'A1'">
      <v-select
        :items="ocBean.selectData"
        :label="ocBean.text"
        dense
        outlined
        v-model="fpo[0]"
        ><template v-slot:prepend>
          {{ ocBean.text }}
        </template></v-select
      >
    </div>
    <div v-else-if="ocBean.uoType === 'B1'">
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateFormatted"
            :label="ocBean.text"
            persistent-hint
            prepend-icon="mdi-calendar"
            v-bind="attrs"
            v-on="on"
            dense
            outlined
            ><template v-slot:prepend>
              {{ ocBean.text }}
            </template></v-text-field
          >
        </template>
        <v-date-picker
          v-model="date"
          no-title
          @input="menu1 = false"
          locale="jp-ja"
          :day-format="(date) => new Date(date).getDate()"
        ></v-date-picker>
      </v-menu>
    </div>
    <div v-else-if="ocBean.uoType === 'C1'">
      <v-text-field
        :label="ocBean.text"
        dense
        clearable
        @keydown.enter="enterkeyDown"
        v-model="fpo[0]"
        outlined
        ><template v-slot:prepend>
          {{ ocBean.text }}
        </template></v-text-field
      >
    </div>
    <div v-else-if="ocBean.uoType === 'D1'">
      <v-text-field
        outlined
        :label="ocBean.text"
        prepend-icon="mdi-star"
        dense
        clearable
        @click.right.prevent="rightClick"
        @keydown.enter="enterkeyDown"
        v-model="fpo[0]"
        ><template v-slot:prepend>
          {{ ocBean.text }}
        </template></v-text-field
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    objectCd: String,
    page: String,
    ocBean: { type: Object },
    selectData: [],
  },
  data: (vm) => ({
    fpo: [],
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    /**
     * 右クリック時
     */
    rightClick: function (e) {
      console.log(e);
    },
    /**
     * Enterキー押下時
     */
    enterkeyDown: function (e) {
      console.log(e);
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${year}/${month}/${day}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>