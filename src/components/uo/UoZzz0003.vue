<template>
  <div>
    <v-chip color="yellow lighten-3">
      {{ ocBean.text }}
    </v-chip>
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