<template>
  <div class="calendar">
    <VCalendar />
  </div>
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
