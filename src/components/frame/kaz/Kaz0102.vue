<template>
<div>
    <p>これはKAZ0102画面です。</p>
    <v-text-field
          v-model="match"
          label="Value must match"
        ></v-text-field>
</div>
</template>
<script>
export default {
    data: () => ({
      match: null,
    }),
}
</script>