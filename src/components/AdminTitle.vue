<template>
  <v-card-title class="card-title">
    {{ title }}
  </v-card-title>
</template>

<script>
export default {
  name: "AdminTitle",
  props: {
    title: {
      type: String,
      required: true,
      default: "AdminTitle",
    },
  },
};
</script>
