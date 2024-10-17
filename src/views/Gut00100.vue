<template>
  <VCalendar />
</template>

<script>
import VCalendar from "@/components/VCalendar.vue";

export default {
  name: "GutCalendar",
  data() {
    return {
      type: "",
    };
  },
  components: {
    VCalendar,
  },
};
</script>
