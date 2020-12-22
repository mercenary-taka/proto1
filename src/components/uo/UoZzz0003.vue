<template>
  <div>
      <v-text-field
      readonly
      dense
      outlined
      :value="ocBean.text"
      ></v-text-field>
  </div>
</template>
<script>
export default {
    props: {
    objectCd: String,
    page: String,
    ocBean: { type: Object },
  },
}
</script>